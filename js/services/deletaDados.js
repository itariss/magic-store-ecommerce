export const apagaDados = async id => {
	return await fetch(`http://localhost:3000/produtos/${id}`, {
		method: "DELETE"
	});
};
