import axios from 'axios';

let contactos = [];

export default {
	incluir(contacto) {
		if (
			contacto.hasOwnProperty('nombre') &&
			contacto.hasOwnProperty('email') &&
			contacto.hasOwnProperty('id')
		) {
			contactos.push(contacto);
		} else {
			throw 'Formato inválido';
		}
	},
	borrar(contactoId) {
		const index = contactos
			.map(({id}) => id)
			.findIndex(id => id === contactoId);

		if (index > -1) {
			contactos = [
				...contactos.slice(0, index),
				...contactos.slice(index + 1),
			];
		}
	},
	reiniciar() {
		contactos = [];
	},
	db() {
		return [
			...contactos,
		];
	},
	starwars(url) {
		// https://swapi.co/
		// http://swapi.co/api/people
		return axios.get(url)
			.then(({ data }) => {
				return data.count;
			})
	},
}
