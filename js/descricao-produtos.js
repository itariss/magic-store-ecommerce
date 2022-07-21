import { recebeProdutos } from "./criaProduto-box.js";

recebeProdutos().then(() => {
	let produtos = document.querySelectorAll(".produtos__img");

	console.log("clicou");
	produtos.forEach(imagem => {
		imagem.addEventListener("click", () => {
			window.location.href = "./descricao.html";
			window.sessionStorage.setItem("imagem", JSON.stringify(imagem.src));
		});
	});
});
