const express = require('express');
const bodyParser = require('body-parser');
const { dialogflow } = require('actions-on-google');
const functions = require('firebase-functions');
const { google } = require('googleapis');
const { WebhookClient } = require('dialogflow-fulfillment');

const PORT = process.env.PORT;

const app = dialogflow();

// fulfillment code here
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });

  function mdn(agent) {
    console.log('This is Jeeves');
  }

  const intentMap = new Map();
  intentMap.set('MDN-Search', mdn);
  agent.handleRequest(intentMap);
});

express().use(bodyParser.json(), app).listen(PORT);
