const express = require('express');
const cors = require('cors');
const indexRouter = require('./routes/index');

const app = express();
app.use(cors());
app.use(express.json({limit: '5mb'}));
app.use('/', indexRouter);

const port = process.env.PORT || 3000;
app.listen(port, () =>
	console.log(`Mutant detector app listening on port ${port}!`),
);

module.exports = app;