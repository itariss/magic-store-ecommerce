import { recebeProdutos } from "./criaProduto-box.js";

recebeProdutos().then(() => {
	let bannerDesc = document.querySelector(".banner__descricao");
	let imagemSrc = JSON.parse(window.sessionStorage.getItem("imagem"));

	bannerDesc.style.background = `url(${imagemSrc}) center / cover no-repeat`;

	let produtos = document.querySelectorAll(".produtos__img");
	let links = document.querySelectorAll(".produtos__link");

	produtos.forEach(imagem => {
		imagem.addEventListener("click", () => {
			window.location.href = "./descricao.html";
			window.sessionStorage.setItem("imagem", JSON.stringify(imagem.src));
		});
	});
	links.forEach(link => {
		link.addEventListener("click", () => {
			event.preventDefault();
			let img = link.closest(".produtos__box").firstElementChild.src;
			window.location.href = "./descricao.html";
			window.sessionStorage.setItem("imagem", JSON.stringify(img));
		});
	});
});
