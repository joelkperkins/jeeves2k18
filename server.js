const express = require('express');

const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/',
  (req, res) => console.log(('Hello, I am Jeeves! I just got this POST: ', req.body)));

app.listen(port, () => console.log(`Jeeves is on port ${port}!`));
