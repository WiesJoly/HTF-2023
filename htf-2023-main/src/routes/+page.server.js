import { randomUUID } from 'crypto';
import { db } from '../lib/db';

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
	}
};
