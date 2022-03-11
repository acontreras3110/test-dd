'use strict';

import getMessage from '../functions/getMessage'
import getLocation from '../functions/getLocation'

module.exports.topSecret = async (event, context, callback) => {

    context.callbackWaitsForEmptyEventLoop = false;

    const {satellites} = JSON.parse(event.body);

    const sizesArraySatellites = satellites?.map(m => m.message).map(m => m.length)
    const validateArraySizes = sizesArraySatellites?.every(val => val === sizesArraySatellites[0])

    if (satellites.length === 0) {
        callback(null, {
            statusCode: 404,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                success: false,
                message: `message not found.`
            })
        })
    } else if (!validateArraySizes) {
        callback(null, {
            statusCode: 404,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                success: false,
                message: `messages obtained are not the same.`
            })
        })
    } else {

        const position = await getLocation(satellites)

        if(position.messages.length){

            const message = await getMessage(position.messages)

            callback(null, {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        position: {x: position.x, y: position.y} ,
                        message,
                    },
                ),
            });
        }else {
            callback(null, {
                statusCode: 404,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    success: false,
                    message: `very distant satellites.`
                })
            })
        }
    }
};
