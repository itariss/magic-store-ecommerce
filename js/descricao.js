import { recebeProdutos } from "./criaProduto-box.js";

recebeProdutos().then(() => {
	let produtos = document.querySelectorAll(".produtos__img");
	let links = document.querySelectorAll(".produtos__link");

	produtos.forEach(imagem => {
		imagem.addEventListener("click", () => {
			window.location.href = "./html/descricao.html";
			window.sessionStorage.setItem("imagem", JSON.stringify(imagem.src));
		});
	});

	links.forEach(link => {
		link.addEventListener("click", () => {
			let img =
				link.closest(".produtos__box").firstElementChild.src || null;
			window.location.href = "./html/descricao.html";
			window.sessionStorage.setItem("imagem", JSON.stringify(img));
		});
	});
});
