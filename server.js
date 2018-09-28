const functions = require('firebase-functions');

const express = require('express');

const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const { WebhookClient } = require('dialogflow-fulfillment');
const {
  Text, Card, Image, Suggestion, Payload,
} = require('dialogflow-fulfillment');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
process.env.DEBUG = 'dialogflow:debug';
const mdnLogo = 'https://res.infoq.com/news/2017/06/mdn-web-documentation-update/en/resources/logo-600x154.png';

// app.post('/',
//   (req, res) => {
//     console.log('Hello, I am Jeeves! I just got this POST: ', req.body.result.resolvedQuery);
//     const SEARCH = req.body.result.resolvedQuery;
//     fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBxosEOVRALmuCV-TzhLjfroQuhd8ex9Sk&cx=006754435674325922743:eel7glah3ve&q=${SEARCH}`)
//       .then(data => data.json())
//       .then(data => console.log('This is Jeeves, I just parsed this data:', data.items[0]));
//   });
/** ********************************************************************************************** */

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log(`Dialogflow Request headers: ${JSON.stringify(request.headers)}`);
  console.log(`Dialogflow Request body: ${JSON.stringify(request.body)}`);


  function mdnSearch(agent) {
    // Get parameters from Dialogflow to convert
    const SEARCH = agent.parameters.search;
    console.log(`Jeeves here, user has requested to search ${SEARCH}`);

    fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBxosEOVRALmuCV-TzhLjfroQuhd8ex9Sk&cx=006754435674325922743:eel7glah3ve&q=${SEARCH}`)
      .then(data => data.json())
<<<<<<< HEAD
<<<<<<< HEAD
      .then(data => console.log('This is Jeeves, I just parsed this data:', data.items[0]));
=======
=======
>>>>>>> parent of 1078d60... got the data from google, now looking for what we want
      .then(data => console.log('This is Jeeves, I just parsed this data:', data));
  });
>>>>>>> parent of 1078d60... got the data from google, now looking for what we want


    //     mdnResults = new Card({
    //       title: `MDN: ${SEARCH}`,
    //       imageUrl: mdnLogo,
    //       text: 'Daniel Gabriel Fahrenheit, invented the Fahrenheit scale (first widely used, standardized temperature scale) and the mercury thermometer.',
    //       buttonText: 'Fahrenheit Wikipedia Page',
    //       buttonUrl: wikipediaFahrenheitUrl,
    //     });
    //   } else if (unit === 'Fahrenheit') {
    //     convertedTemp = (temperature - 32) * (5 / 9);
    //     convertedUnit = 'Celsius';
    //     temperatureHistory = new Card({
    //       title: 'Celsius',
    //       imageUrl: wikipediaCelsiusImageUrl,
    //       text: 'The original Celsius thermometer had a reversed scale, where 100 is the freezing point of water and 0 is its boiling point.',
    //       buttonText: 'Celsius Wikipedia Page',
    //       buttonUrl: wikipediaCelsiusUrl,
    //     });
    //   }

    //   // Sent the context to store the parameter information
    //   // and make sure the followup Rankine
    //   agent.setContext({
    //     name: 'temperature',
    //     lifespan: 1,
    //     parameters: { temperature, unit },
    //   });

  //   // Compile and send response
  //   agent.add(`${temperature}° ${unit} is  ${convertedTemp}° ${convertedUnit}`);
  //   agent.add(temperatureHistory);
  //   agent.add('Would you like to know what this temperature is in Kelvin or Rankine?');
  //   agent.add(new Suggestion('Kelvin'));
  //   agent.add(new Suggestion('Rankine'));
  //   agent.add(new Suggestion('Cancel'));
  // }
  }

  function fallback(agent) {
    agent.add('I didn\'t get that, can you try again?');
  }

  const intentMap = new Map(); // Map functions to Dialogflow intent names
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('MDN - search', mdnSearch);
  intentMap.set('Default Fallback Intent', fallback);
  agent.handleRequest(intentMap);
});


/** ******************************************************************************** */
app.listen(port, () => console.log(`Jeeves is on port ${port}!`));

const api1 = functions.https.onRequest(app);

module.exports = {
  api1,
};
