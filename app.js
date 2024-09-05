const express = require('express');
const indexRouter = require('./routes/index');

const app = express();

app.use(express.json());

app.use('/', indexRouter);
app.listen(3000, () => console.log('listening on port 3000'))

module.exports = app;
