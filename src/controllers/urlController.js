const Url = require('../models/modelShortener')
const Crypto = require('crypto');

module.exports = {
	async view(req, res){
		try {
			const { id } = req.params;

			const urlDestination = await Url.find({ slug: id });

			res.set('Location', urlDestination[0].urlDestination);

			return res.status(302).send(urlDestination);
		} catch (err) {
			return res.status(400).send({error: "Unable to send you to location"});
		}
	},
	async create(req, res){
		try { 
			const randomBytes = Crypto.randomBytes(5).toString("HEX");
			const url = await Url.create({
				urlDestination: req.body.url,
				slug: randomBytes 
			})

			return res.status(200).send(url);
		} catch (err) {
			console.log(err);
			return res.status(400).send({error: "Unable to create your urlShortened"});
		}
	}
}