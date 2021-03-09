const express = require('express');
const router = express.Router();
const fileDb = require('../fileDb');

router.get('/', (req, res) => {
	const messages = fileDb.getMessages();
	res.send(messages);
});

// router.get('/:id', (req, res) => {
// 	const message = fileDb.getMessageByDate(req.params.data);
// 	res.send('Hello id');
// });

router.post('/', (req, res) => {
	fileDb.addMessage(req.body);
	res.send(req.body);
});

module.exports = router;
