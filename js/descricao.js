import { recebeProdutos } from "./criaProduto-box.js";

recebeProdutos().then(() => {
	let produtos = document.querySelectorAll(".produtos__img");

	produtos.forEach(imagem => {
		imagem.addEventListener("click", () => {
			window.location.href = "./html/descricao.html";
			window.sessionStorage.setItem("imagem", JSON.stringify(imagem.src));
		});
	});
});
