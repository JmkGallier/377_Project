const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.listen(process.env.PORT || 5000);


const sqlite3 = require('sqlite3');
const Promise = require('bluebird');
// const mainDB = require('./mainDatabase');
//const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('src/public'));


app.get('/api', (req, res) => {
  const baseURL = 'https://data.princegeorgescountymd.gov/api/views/2qma-7ez9/rows.json?accessType=DOWNLOAD';
  fetch(baseURL)
      .then(res => res.json())
      .then(data => res.send({data: data}))
      .catch((err) => {
          console.log(err);
          res.redirect('/error');
    });
});

//app.listen(port, () => console.log(`Example app listening on port ${port}!`));
