import { randomUUID } from 'crypto';
import { db } from '../lib/db';
import { log } from 'console';

export const ssr = false;

export async function load() {
	const { sightings } = await db.getData('sightings');
	return {
		sightings
	};
}

export const actions = {
	add: async ({ request }) => {
		const formData = await request.formData();
		await db.push(
			'/sightings[]',
			{
				id: randomUUID(),
				username: formData.get('username'),
				location: {
					latitude: formData.get('lat'),
					longitude: formData.get('long'),
				},
				type: formData.get('type'),
				timestamp: new Date().toISOString(),
				title: formData.get('title'),
				description: formData.get('description')
			},
			true
		);
		console.log(formData.get('type'))
	},
	signUp: async ({ request }) => {
		const formData = await request.formData();
		await db.push(
			'/accounts[]',
			{
				id: randomUUID(),
				username: formData.get('username')
			},
			true
		);
	},
	signIn: async ({ request }) => {
		console.log("Sign in getriggerd");
		const formData = await request.formData();
		console.log(formData)
		data = formData.getData("username").value;
		//console.log(data);
		//const accounts = db.getData("accounts")
		//console.log(accounts);
		//const gevondenUser = accounts.findIndex((user) => user.uuid === data)
		// console.log(gevondenUser);
	}
}