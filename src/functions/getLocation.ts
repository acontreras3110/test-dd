import {coordinates} from '../type'
import {POSITION} from '../consts'

// input: distance to the transmitter as it is received on each satellite
// output: the 'x' and 'y' coordinates of the sender of the message


//no puede asumir la posición de la nave por lo
// que asumo que seran siempre las cordenadas [0,0]

//voy a modificar un poco esta función para no dejarla inutulizada
// voy a modificar un poco esta función para no dejarla inutulizada

export default async (
    satellites: any[]
): Promise<coordinates> => {

    const messages: any = []

    //realizamos una funcion matematica que permite calcular la distancia entre dos puntos
    const distance = (x1: number, y1: number, x2: number, y2: number) => {
        let y = x2 - x1;
        let x = y2 - y1;
        return Math.sqrt(x * x + y * y);
    }

    for (let i = 0; i < satellites.length; i++) {

        const nameSatellite = satellites[i].name.toLowerCase()
        //distanceTotal : la distancia que esta entre el punto [0,0] y el satelite
        const distanceTotal = distance(0, 0, POSITION[`${nameSatellite}`][0], POSITION[`${nameSatellite}`][1])

        //la distancia del satelite debe ser menor o igual a la distancia de la nave hacia el satélite
        if (satellites[i].distance <= distanceTotal) {
            messages.push(satellites[i].message)
        }
    }
    // recordemos que en este caso la distancia de la nave sera [0,0]
    return {messages, x: 0, y: 0};
}

