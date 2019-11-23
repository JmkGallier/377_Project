const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/api', (req, res) => {
  const baseURL = 'https://data.princegeorgescountymd.gov/resource/2qma-7ez9.json';
  fetch(baseURL)
      .then(res => res.json())
      .then(data => {
          res.send({data: data});
          console.log(data)})
      // .then(res => res.filter((c) => c.dept_id === "INST"))
      // .then(res => res.map(c => `${c.course_id}: ${c.name}`))
      .catch((err) => {
          console.log(err);
          res.redirect('/error');
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
