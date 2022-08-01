import { formContatoValidity } from "../forms/formContato.js";

export const editaDados = async (id, editInfo) => {
	const produtoEditado = await fetch(`http://localhost:3000/produtos/${id}`, {
		method: "PUT",
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify({
			nome: editInfo.nome,
			src: editInfo.imagem,
			categoria: editInfo.categoria,
			preco: editInfo.preco,
			descricao: editInfo.descricao
		})
	});
	return produtoEditado.body;
};

window.addEventListener("load", () => {
	const edicaoProduto =
		JSON.parse(window.localStorage.getItem("produtoInfo")) || null;
	edicaoProduto ? toEdit(edicaoProduto) : null;
});

const toEdit = editInfo => {
	const nome = document.querySelector("[data-form-produto-nome]");
	const img = document.querySelector("[data-form-produto-imagem]");
	const preco = document.querySelector("[data-form-produto-preco]");
	const categoria = document.querySelector("[data-form-produto-categoria]");
	const descricao = document.querySelector("[data-form-produto-descricao]");

	nome.value = editInfo.nome;
	img.value = editInfo.imagem;
	preco.value = editInfo.preco;
	categoria.value = editInfo.categoria;
	descricao.value = editInfo.descricao;
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

	const id = JSON.parse(window.localStorage.getItem("produtoInfo")).id;
	const produtoEditado = {
		nome: nome,
		imagem: img,
		preco: preco,
		categoria: categoria,
		descricao: descricao
	};

	editaDados(id, produtoEditado);

	window.location.href = "./admin.html";
});

formContatoValidity();
