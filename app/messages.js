const express = require('express');
const fs = require('fs');
const path = './messages';
const router = express.Router();
const fileDb = require('../fileDb');

router.get('/', (req, res) => {
	fs.readdir(path, (err, files) => {
		if (err) {
			return console.log(err);
		}
		const messages = [];
		files.forEach(file => {
			const result = fs.readFileSync(path + '/' + file);
			const resultParse = JSON.parse(result);
			messages.push(resultParse);
		});
		const lastFiveMessages = messages.slice((messages.length - 5), messages.length);
		res.send(lastFiveMessages);
	});
});

router.post('/', (req, res) => {
	fileDb.addMessage(req.body);
	res.send(req.body);
});

module.exports = router;
