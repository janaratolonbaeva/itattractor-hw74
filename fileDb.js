const fs = require('fs');
const moment = require('moment');
let data = {};

module.exports = {
	init() {
		try {
			const fileContents = fs.readFileSync(`./messages/${data.datetime}.txt`);
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
	}
};