const express = require('express');

const app = express();
const port = process.env.PORT;
let bodyParser = require('body-parser');

app.post((req, res) => console.log(('Hello, I am Jeeves!')));

app.listen(port, () => console.log(`Jeeves is on port ${port}!`))
;