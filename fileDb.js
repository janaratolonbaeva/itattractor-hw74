const fs = require('fs');
const moment = require('moment');
const filename = './db.json';
let data = {};

module.exports = {
	init() {
		try {
			const fileContents = fs.readFileSync(filename);
			data = JSON.parse(fileContents);
		} catch (e) {
			data = {};
		}
	},
	addMessage(message) {
		message.datetime = moment().format();
		data = message;
		this.save();
	},
	save() {
		fs.writeFileSync(`./messages/${data.datetime}.txt`,
			JSON.stringify(data, null, 2));
		fs.writeFileSync(filename,
			JSON.stringify(data, null, 2));
	}
};