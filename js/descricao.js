import { serverService } from "./criaProduto-box.js";
import { buscaDados } from "./services/buscaDados.js";

serverService.recebeProdutos().then(() => {
	let produtos = document.querySelectorAll(".produtos__img");
	let links = document.querySelectorAll(".produtos__link");

	produtos.forEach(imagem => {
		imagem.addEventListener("click", () => {
			console.log(buscaDados(imagem));
			window.localStorage.setItem(
				"produtoInfo",
				JSON.stringify(buscaDados(imagem))
			);
			window.location.href = "./html/descricao.html";
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
			window.location.href = "./html/descricao.html";
		});
	});
});
