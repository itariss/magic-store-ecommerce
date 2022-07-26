export const editaDados = (target, editInfo) => {
	const todosProdutos = JSON.parse(
		window.localStorage.getItem("listaProdutos")
	);
	let id = target;
	todosProdutos.forEach(produto => {
		if (id == produto.id) {
			produto.nome = editInfo.nome;
			produto.src = editInfo.imagem;
			produto.categoria = editInfo.categoria;
			produto.preco = editInfo.preco;
			produto.descricao = editInfo.descricao;
		}
	});
	console.log(todosProdutos);
	return window.localStorage.setItem(
		"listaProdutos",
		JSON.stringify(todosProdutos)
	);
};

window.addEventListener("load", () => {
	const edicaoProduto =
		JSON.parse(window.localStorage.getItem("edit")) || null;
	edicaoProduto ? toEdit(edicaoProduto) : null;
});

const toEdit = editInfo => {
	const nome = document.querySelector("[data-form-produto-nome]");
	const img = document.querySelector("[data-form-produto-imagem]");
	const preco = document.querySelector("[data-form-produto-preco]");
	const categoria = document.querySelector("[data-form-produto-categoria]");
	const descricao = document.querySelector("[data-form-produto-descricao]");

	const id = editInfo.id;
	nome.value = editInfo.nome;
	img.value = editInfo.imagem;
	preco.value = editInfo.preco;
	categoria.value = editInfo.categoria;
	descricao.value = editInfo.descricao;

	return id;
};

const formProduto = document.querySelector("[data-form-produto]");

formProduto.addEventListener("submit", event => {
	event.preventDefault();
	const nome = event.target.querySelector("[data-form-produto-nome]").value;
	const img = event.target.querySelector("[data-form-produto-imagem]").value;
	const preco = event.target.querySelector("[data-form-produto-preco]").value;
	const categoria = event.target.querySelector(
		"[data-form-produto-categoria]"
	).value;
	const descricao = event.target.querySelector(
		"[data-form-produto-descricao]"
	).value;

	const id = JSON.parse(window.localStorage.getItem("edit")).id;
	const produtoEditado = {
		nome: nome,
		imagem: img,
		preco: preco,
		categoria: categoria,
		descricao: descricao
	};

	console.log(id, produtoEditado);

	editaDados(id, produtoEditado);

	window.location.href = "./admin.html";
});
