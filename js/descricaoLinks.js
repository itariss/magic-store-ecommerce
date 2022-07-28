import { htmlDoc } from "./pageLocation.js";
import { buscaDados } from "./services/buscaDados.js";

export const linksProdutos = () => {
	let produtos = document.querySelectorAll(".produtos__img");
	let links = document.querySelectorAll(".produtos__link");
	let linkTodosProdutos = document.querySelector(".produtos__link--secao");

	linkTodosProdutos
		? (linkTodosProdutos.href = `./${htmlDoc()}produtos.html`)
		: null;

	produtos.forEach(imagem => {
		imagem.addEventListener("click", () => {
			window.localStorage.setItem(
				"produtoInfo",
				JSON.stringify(buscaDados(imagem))
			);
			let id = buscaDados(imagem).id;
			window.location.href = `./${htmlDoc()}descricao.html?id=${id}`;
		});
	});

	links.forEach(link => {
		link.addEventListener("click", event => {
			event.preventDefault();
			window.localStorage.setItem(
				"produtoInfo",
				JSON.stringify(buscaDados(link))
			);
			let id = buscaDados(link).id;
			window.location.href = `./${htmlDoc()}descricao.html?id=${id}`;
		});
	});
};
