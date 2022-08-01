export const novoProduto = async (
	nome,
	img,
	preco,
	id,
	categoria,
	descricao
) => {
	const enviaNovoProduto = await fetch("http://localhost:3000/produtos/", {
		method: "POST",
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify({
			nome: nome,
			src: img,
			preco: preco,
			id: id,
			categoria: categoria,
			descricao: descricao
		})
	});

	return enviaNovoProduto.body;
};
