export const buscaDados = target => {
	const todosProdutos = JSON.parse(
		window.localStorage.getItem("listaProdutos")
	);
	let id = target.closest(".produtos__box").id;
	let img;
	let sessao;
	let preco;
	let descricao;
	let nome;

	todosProdutos.forEach(produto => {
		if (id == produto.id) {
			sessao = produto.categoria;
			img = produto.src;
			preco = produto.preco;
			nome = produto.nome;
			descricao = produto.descricao || null;
		}
	});

	const descricaoInfo = {
		id: id,
		nome: nome,
		imagem: img,
		categoria: sessao,
		preco: preco,
		descricao: descricao
	};

	return descricaoInfo;
};
