const express = require('express');
const fetch = require('node-fetch');
const sqlite3 = require('sqlite3').verbose();

const app = express();

app.listen(process.env.PORT || 5000);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('src/public'));

function dbInit(data) {
    const db = new sqlite3.Database("./build/pgCountySpending.db", (err) => {
        if (err) {
            console.log('Error when creating the database', err)
        } else {
            console.log('Database created!');
            db.run(
                `CREATE TABLE IF NOT EXISTS spendingDB (
                agency TEXT, 
                amount INT, 
                description TEXT)`,
                insertData
            )
        }
    });

    async function insertData() {
        console.log("Insert data");
        let stmt = db.prepare(`INSERT INTO spendingDB(agency, amount, description) VALUES (?, ?, ?)`);
        for (let i = 0; i < data.data.length; i++) {
            await stmt.run(data.data[i][9], data.data[i][11], data.data[i][12])
        }
        stmt.finalize(db.close);
    }
}


function readSumZip(agency_param) {
    const db = new sqlite3.Database("./build/pgCountySpending.db");
    const queries = [];
    let sql = `SELECT description as label, SUM(amount) as y 
    FROM spendingDB 
    WHERE agency = (?) 
    GROUP BY description 
    ORDER BY y desc `;
    return new Promise(resolve => {
        db.all(sql, [agency_param], (err, rows) => {
            if (err) {
                return console.error(err.message);
            }
            rows.forEach((row) => {
                queries.push(row)
            });
            resolve(queries)
        });
    });
}


app.get('/api', (req, res) => {
    const baseURL = 'https://data.princegeorgescountymd.gov/api/views/2qma-7ez9/rows.json?accessType=DOWNLOAD';
    fetch(baseURL)
        .then(res => res.json())
        .then(data => dbInit(data))
        .then(sqlResults => res.send({data: sqlResults}))
        .catch((err) => {
            console.log(err);
            res.redirect('/error');
        });
});


app.post(`/sqlQuery`, (req, res) => {
        let agency_param = req.body.param;
        console.log(agency_param);
        readSumZip(agency_param)
            .then(queryResult => {
                res.send({data: queryResult})
            })
            .catch((err) => {
                console.log(err);
                res.redirect('/error');
            })
    }
);

