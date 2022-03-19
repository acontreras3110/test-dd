import { message } from '../model/test/type';

// input: the message as it is received on each satellite
// output: the message as it is generated by the sender of the message

export default async (messages: string[]): Promise<message> => {
	// agregamos el primer arreglo de string
	let messageFinal: any = messages[0];

	const insert = (arr, index, newItem) => [
		// parte de el array antes del índice especificado
		...arr.slice(0, index),
		// insertamos el item
		newItem,
		// parte de el array despues del indice
		...arr.slice(index + 1),
	];
	//recorremos todos los mensajes
	for (let i = 1; i < messages.length; i++) {
		//recorremos cada indice en busca de palabras de nuestro mensaje
		for (let j = 0; j < messages[i].length; j++) {
			// si se encuentra con un indice vacio no lo incorporamos en nuestro mensaje
			if (messages[i][j] != '') {
				messageFinal = insert(messageFinal, j, messages[i][j]);
			}
		}
	}

	//retornamos el mensaje con el formato correspondiente
	return messageFinal.join(' ') as message;
};
