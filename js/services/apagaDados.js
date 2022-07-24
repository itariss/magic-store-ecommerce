export const apagaDados = target => {
	const todosProdutos = JSON.parse(
		window.localStorage.getItem("listaProdutos")
	);
	let id = target.closest(".produtos__box").id;
	todosProdutos.forEach(produto => {
		if (id == produto.id) {
			produto.id = "inativo";
		}
	});
	console.log(todosProdutos);
	return window.localStorage.setItem(
		"listaProdutos",
		JSON.stringify(todosProdutos)
	);
};
