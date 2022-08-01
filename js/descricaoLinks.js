import { htmlDoc } from "./pageLocation.js";
import { buscaDados } from "./services/buscaDados.js";
import { zoomImages } from "./zoomImages.js";

export const linksProdutos = () => {
	let imagens = document.querySelectorAll(".produtos__img");
	let ancoras = document.querySelectorAll(".produtos__link");
	let linkTodosProdutos = document.querySelector(".produtos__link--secao");

	linkTodosProdutos
		? (linkTodosProdutos.href = `./${htmlDoc()}produtos.html`)
		: null;

	setLinks(imagens);
	setLinks(ancoras);
	zoomImages(imagens);
};

const setLinks = targets => {
	targets.forEach(target => {
		target.addEventListener("click", event => {
			event.preventDefault();
			let id = target.closest(".produtos__box").id;
			buscaDados(id).then(() => {
				window.location.href = `./${htmlDoc()}descricao.html?id=${id}`;
			});
		});
	});
};
