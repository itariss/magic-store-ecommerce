import { criaSessaoCategoria } from "./criaSessao.js";

export const recebeProdutos = async () => {
	const dadosProdutos = await fetch("http://localhost:3000/produtos");
	const listaProdutos = await dadosProdutos.json();
	window.localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
	const todosProdutos = JSON.parse(
		window.localStorage.getItem("listaProdutos")
	);
	return todosProdutos;
};

export const criaProduto = data => {
	data.forEach(produto => {
		const conteudo = `<div class="produtos__box" id="${produto.id}">
			<img
				src="${produto.src}"
				alt=""
				class="produtos__img"
		/ >
			<div class="produtos__conteudo">
				<h2 class="produtos__nome">${produto.nome}</h2>
				<h2 class="produtos__preco">${produto.preco}</h2>
				<a href="" class="produtos__link">Ver Produto</a>
			</div>
		</div>`;

		const container = document.querySelector(
			`[data-container-${produto.categoria}]`
		);

		container.innerHTML += conteudo;

		return container;
	});
};

recebeProdutos().then(data => {
	criaSessaoCategoria(data);
	criaProduto(data);
});

export const serverService = {
	recebeProdutos,
	criaSessaoCategoria,
	criaProduto
};
