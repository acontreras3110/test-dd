# Test 

Han Solo has recently been appointed General of the Rebel Alliance and seeks to strike a
major blow against the Galactic Empire to rekindle the flame of resistance. The rebel
intelligence service has detected a call for help from an Imperial cargo ship adrift in an
asteroid field. The ship's manifest is ultra-classified, but is rumored to carry rations and
weaponry for an entire legion.

## Como se usa?

### Servicio POST /topsecret/
#### URL: https://fehumgnud1.execute-api.us-east-1.amazonaws.com/topsecret

El servicio recibirá la información de la nave a través de un HTTP POST en
el siguiente formato:

POST → /topsecret/
```JSON
{
    "satellites": [
        {
            "name": "kenobi",
            "distance": 100.0,
            "message": ["this", "", "", "message", ""]
        }, {
            "name": "skywalker",
            "distance": 115.5,
            "message": ["", "is", "", "", "secret"]
        }, {
            "name": "sato",
            "distance": 142.7,
            "message": ["this", "", "a", "", ""]
        }
    ]
}
```
La respuesta por su parte, debe tener la siguiente forma:
```JSON
{
    "position": {
        "x": -100.0,
        "y": 75.5
    },
    "message": "this is a secret message"
}
```
recordemos que hice unos cambios en retorno de la información, 
la posicion sera [0,0] de la nave que trata de obtener la información, 
la distancia del satelite debe ser menor o igual a la distancia de la nave hacia el satélite, 
para que esta retorne la informacion del mensaje completo, 
en caso de que la nave se encuentre muy alejada del satelite este no recibira la información.




## El siguiente comando nos permite ver los servicios creados y su informacion de serverless
```serverless info```





