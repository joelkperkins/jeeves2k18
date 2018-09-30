const express = require('express');
const bodyParser = require('body-parser');
const { BasicCard } = require('actions-on-google');

const app = express();
const port = process.env.PORT;
const fetch = require('node-fetch');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let mdnResponse = new BasicCard();

app.post('/',
  (req, res) => {
    console.log('Hello, I am Jeeves! I just got this POST: ', req.body.result.fulfillment);
    const SEARCH = req.body.result.resolvedQuery;
    fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBxosEOVRALmuCV-TzhLjfroQuhd8ex9Sk&cx=006754435674325922743:eel7glah3ve&q=${SEARCH}`)
      .then(data => data.json())
      .then((data) => {
        const snippetArrayNeedsFilter = Array.from(data.items[0].snippet);
        mdnResponse = mdnResponse.setTitle(data.items[0].title)
          .setBodyText(snippetArrayNeedsFilter
            .filter((item) => { if (item !== '\n') return item; }).join(''))
          .setImage('https://res.infoq.com/news/2017/06/mdn-web-documentation-update/en/resources/logo-600x154.png',
            'MDN Logo', 300, 77)
          .addButtons(`Read more about ${SEARCH}`, data.items[0]);
        console.log('This is Jeeves, I just parsed this data:', mdnResponse);
      });
    res.end(mdnResponse.json());
  });


// app.listen(port, () => console.log(`Jeeves is on port ${port}!`));

app.listen(port);
