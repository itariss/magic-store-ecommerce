import { buscaDados } from "./services/buscaDados.js";

export const linksProdutos = () => {
	let produtos = document.querySelectorAll(".produtos__img");
	let links = document.querySelectorAll(".produtos__link");
	let linkTodosProdutos = document.querySelector(".produtos__link--secao");

	linkTodosProdutos ? (linkTodosProdutos.href = "./produtos.html") : null;

	produtos.forEach(imagem => {
		imagem.addEventListener("click", () => {
			window.localStorage.setItem(
				"produtoInfo",
				JSON.stringify(buscaDados(imagem))
			);
			window.location.href = "./descricao.html";
		});
	});

	links.forEach(link => {
		link.addEventListener("click", event => {
			event.preventDefault();
			console.log(buscaDados(link));

			window.localStorage.setItem(
				"produtoInfo",
				JSON.stringify(buscaDados(link))
			);
			window.location.href = "./descricao.html";
		});
	});
};
