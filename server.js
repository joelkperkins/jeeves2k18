const express = require('express');

const app = express();
const port = process.env.PORT;
const fetch = require('node-fetch');


app.post('/',
  (req, res) => {
    console.log('Hello, I am Jeeves! I just got this POST: ', req.body);
    const SEARCH = req.body.result.resolvedQuery;
    fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBxosEOVRALmuCV-TzhLjfroQuhd8ex9Sk&cx=006754435674325922743:eel7glah3ve&q=${SEARCH}`)
      .then(data => data.json())
      .then(data => console.log('This is Jeeves, I just parsed this data:', data.items[0]));
  });


// app.listen(port, () => console.log(`Jeeves is on port ${port}!`));

app.listen(port);
