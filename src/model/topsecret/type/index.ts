// El sistema de tipos de Typescript realiza una formalización de los tipos de Javascript,
// mediante una representación estática de sus tipos dinámicos. Esto permite a los desarrolladores
// definir variables y funciones tipadas sin perder la esencia de Javascript.
// Poder definir los tipos durante el tiempo de diseño nos ayuda a evitar errores en tiempo de ejecución,
// como podría ser pasar el tipo de variable incorrecto a una función.

//en este caso las constantes que son declaradas son pequeñas,
//pero en otros casos pueden ser de varias lineas de codigos,
//por esto la importancia de separar en archivos de tipos de datos entre otros en el "MODEL"
//esto mantendra un codigo mas limpio y facil de mantener en el tiempo
//ya que los archivos no son de gran tamaño y son faciles de identificar.

export interface coordinates {
	x: number;
	y: number;
	messages: string[];
}

export interface message {
	msg: string;
}

export interface infoSatellites {
	name: string;
	distance: number;
	message: string[];
}
