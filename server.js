const express = require('express');
const fetch = require('node-fetch');
const Promise = require('bluebird');
const sqlite3 = require('sqlite3').verbose();
//async  default sych await@MDN

const app = express();

app.listen(process.env.PORT || 5000);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('src/public'));

async function dbInit(data) {

    let db = new sqlite3.Database("./pgCountySpending.db", (err) => {
        if (err) {
            console.log('Error when creating the database', err)
        } else {
            console.log('Database created!');
            db.run(`CREATE TABLE IF NOT EXISTS spendingDB (payee TEXT,
            agency TEXT,
            zip TEXT,
            amount TEXT,
            description TEXT)`, insertData
            );
        }
    });

    const insertData = () =>{
        console.log("Insert data");
        let stmt = db.prepare(`INSERT INTO spendingDB(payee, agency, zip, amount, description) VALUES (?, ?, ?, ?, ?)`);

        for (let i=0; i < data.data.length; i++ ) {
            // console.log(i, data.data[i][8], data.data[i][9], data.data[i][10], data.data[i][11], data.data[i][12]);
            stmt.run(data.data[i][8], data.data[i][9], data.data[i][10], data.data[i][11], data.data[i][12])
        }
        stmt.finalize(readSumZip)
    };

    async function readSumZip() {
        let sql = 'SELECT zip, sum(amount) FROM spendingDB GROUP BY zip ';
        db.all(sql, function(err, rows) {
            rows.forEach(function (row) {
                console.log(row.payee + ": " + row.amount);
            });
            db.close();
        });
    }
}

app.get('/api', (req, res) => {
  const baseURL = 'https://data.princegeorgescountymd.gov/api/views/2qma-7ez9/rows.json?accessType=DOWNLOAD';
  fetch(baseURL)
      .then(res => res.json())
      .then(data => {
          res.send({data: data});
          dbInit(data);
      })
      .catch((err) => {
          console.log(err);
          res.redirect('/error');
    });
});



