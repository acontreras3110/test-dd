'use strict';

import getMessage from '../functions/getMessage';
import getLocation from '../functions/getLocation';
import isValidSatellite from '../model/topsecret/joi';

module.exports.topSecret = async (event, context, callback) => {
	context.callbackWaitsForEmptyEventLoop = false;

	try {
		//antes de procesar la funcion validamos que los datos ingresados en el
		//JSON del POST son los correctos y cumplen con el formato establecido.
		const { error } = isValidSatellite.validate(JSON.parse(event.body));

		if (!error) {
			const { satellites } = JSON.parse(event.body);
			const position = await getLocation(satellites);

			//si la nave se encuentra muy lejos y el mensaje no pudo formarse,
			//este no retornara ningun mensaje
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
					message: `invalid data entered.`,
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
				message: `unhandled error.`,
			}),
		});
	}
};
