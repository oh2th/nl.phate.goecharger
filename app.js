'use strict';

const Homey = require('homey');

class goechargerapp extends Homey.App {

	onInit() {
		this.log('goechargerapp is running...');
		this.sendNotifications();

	}

	async sendNotifications() {
		try {
			const ntfy_deprecation_01 = `[Go-e Charger] (1/3) - Deprecation notide: This app is no longer maintained.`;
			const ntfy_deprecation_02 = `[Go-e Charger] (2/3) - For future support and new features please install the new app.`;
			const ntfy_deprecation_03 = `[Go-e Charger] (3/3) - App store link: https://homey.app/a/com.go-e.charger`;

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
