import { criaSessaoCategoria } from "./criaSessao.js";

export const recebeProdutos = async () => {
	const dadosProdutos = await fetch(
		"https://my-json-server.typicode.com/itariss/challenge-one-ecommerce/produtos"
	);
	const listaProdutos =
		JSON.parse(window.localStorage.getItem("listaProdutos")) ||
		(await dadosProdutos.json());
	window.localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
	return listaProdutos;
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

		return container ? (container.innerHTML += conteudo) : null;
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
