'use strict';

import getMessage from '../functions/getMessage';
import getLocation from '../functions/getLocation';
import isValidSatellite from '../model/test/joi';

module.exports.topSecret = async (event, context, callback) => {
	context.callbackWaitsForEmptyEventLoop = false;

	try {
		const { error } = isValidSatellite.validate(JSON.parse(event.body));

		if (!error) {
			const { satellites } = JSON.parse(event.body);
			const position = await getLocation(satellites);

			if (position.messages.length) {
				const message = await getMessage(position.messages);

				callback(null, {
					statusCode: 200,
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						position: { x: position.x, y: position.y },
						message,
					}),
				});
			} else {
				callback(null, {
					statusCode: 404,
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						success: false,
						message: `very distant satellites.`,
					}),
				});
			}
		} else {
			callback(null, {
				statusCode: 404,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					success: false,
					message: `message not found.`,
					details: error.details,
				}),
			});
		}
	} catch (e) {
		callback(null, {
			statusCode: 404,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				success: false,
				message: `messages obtained are not the same.`,
			}),
		});
	}
};
