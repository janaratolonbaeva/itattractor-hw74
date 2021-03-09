const fs = require('fs');
const moment = require('moment');
const filename = './db.json';
const path = './messages';
let data = {};
const fileNames = [];
const lastFive = fileNames.slice((fileNames.length - 5), fileNames.length);

module.exports = {
	init() {
		try {
			const fileContents = fs.readFileSync(filename);
			data = JSON.parse(fileContents);
		} catch (e) {
			data = {};
		}
	},
	getMessages() {
		fs.readdir(path, (err, files) => {
			if (err) {
				return console.log(err);
			}
			files.forEach(file => {
				console.log(path + '/' + file);
				return path + '/' + file;
			});
			console.log(fileNames);
		});
	},
	addMessage(message) {
		message.datetime = moment().format();
		data = message;
		this.save();
	},
	save() {
		fileNames.push(data.datetime);
		fs.writeFileSync(`./messages/${data.datetime}.txt`, JSON.stringify(data, null, 2));
	}
};