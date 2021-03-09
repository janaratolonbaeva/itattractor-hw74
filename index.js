const express = require('express');
const messages = require('./app/messages');
const fileDb = require('./fileDb');
const app = express();
app.use(express.json());
fileDb.init();

const port = 8000;

app.use('/messages', messages);

app.listen(port, () => {
	console.log(port);
});