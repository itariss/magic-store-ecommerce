import { serverService } from "../serverService.js";

export const buscaDados = async id => {
	const listaProdutos = await serverService.recebeProdutos();
	// const todosProdutos = JSON.parse(
	// 	window.localStorage.getItem("listaProdutos")
	// );

	const descricaoInfo = {};

	const comparaIds = dados => {
		dados.forEach(produto => {
			if (id == produto.id) {
				descricaoInfo.nome = produto.nome;
				descricaoInfo.imagem = produto.src;
				descricaoInfo.id = produto.id;
				descricaoInfo.preco = produto.preco;
				descricaoInfo.categoria = produto.categoria;
				descricaoInfo.descricao = produto.descricao || null;
			}
		});
		return descricaoInfo;
	};

	const info = comparaIds(listaProdutos);

	return window.localStorage.setItem("produtoInfo", JSON.stringify(info));
};
