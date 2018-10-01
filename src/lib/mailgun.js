let apiKey = process.env.PREACT_APP_MAILGUN_API_KEY;
let domain = 'mg.farmhaus.app';
let mailgun = require('mailgun-js')({ apiKey: this.apiKey, domain: this.domain });

class Mail {
	constructor() {
    this.sendEmail = this.sendEmail.bind(this);
    this.to = 
	}

	sendEmail(recipientEmail, subject, text) {

		let data = {
			from: this.fromEmail,
			to: recipientEmail,
			subject: this.subject,
			text: this.text
		};

		mailgun.messages().send(data, (error, body) => {
			if (error) {
				console.log(error);
			}
			console.log(body);
		});
	}
}

const mail = new Mail();