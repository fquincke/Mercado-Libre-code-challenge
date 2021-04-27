const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRouter = require('./routes/index');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', indexRouter);

const port = process.env.port || 3000;
app.listen(port, () =>
	console.log(`Mutant detector app listening on port ${port}!`),
);

module.exports = app;