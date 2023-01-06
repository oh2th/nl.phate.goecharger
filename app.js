'use strict';

const Homey = require('homey');

class goechargerapp extends Homey.App {

	onInit() {
		this.log('goechargerapp is running...');
		this.sendNotifications();

	}

	async sendNotifications() {
		try {
			const ntfy_deprecation_01 = `[Go-e Charger] (1/3) - Deprecation notice: This app will not be supported on SDK3 and Homey Pro 2023.`;
			const ntfy_deprecation_02 = `[Go-e Charger] (2/3) - For future support and new features please install the new app.`;
			const ntfy_deprecation_03 = `[Go-e Charger] (3/3) - App store link: https://tinyurl.com/go-echarger`;

			await Homey.ManagerNotifications.registerNotification({
				excerpt: ntfy_deprecation_01
			}).then( result => { console.log(result);	}).catch( err => { console.error(err); })

			await Homey.ManagerNotifications.registerNotification({
				excerpt: ntfy_deprecation_02
			}).then( result => { console.log(result);	}).catch( err => { console.error(err); })

			await Homey.ManagerNotifications.registerNotification({
				excerpt: ntfy_deprecation_03
			}).then( result => { console.log(result);	}).catch( err => { console.error(err); })
			  
		} catch (error) {
			this.log('sendNotifications - error', console.error());
		}
	}
	
}


module.exports = goechargerapp;
