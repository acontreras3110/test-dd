// El sistema de tipos de Typescript realiza una formalización de los tipos de Javascript,
// mediante una representación estática de sus tipos dinámicos. Esto permite a los desarrolladores
// definir variables y funciones tipadas sin perder la esencia de Javascript.
// Poder definir los tipos durante el tiempo de diseño nos ayuda a evitar errores en tiempo de ejecución,
// como podría ser pasar el tipo de variable incorrecto a una función.

export interface coordinates {
	x: number;
	y: number;
	messages: string[];
}

export interface message {
	msg: string;
}
