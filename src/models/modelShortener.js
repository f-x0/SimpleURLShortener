const mongoose = require('../database/connect');

const ShortenerSchema = new mongoose.Schema({
	urlDestination: {
		type: String,
		required: true
	},
	slug: {
		type: String,
		unique: true,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const Shortener = mongoose.model('Shortener', ShortenerSchema)

module.exports = Shortener;