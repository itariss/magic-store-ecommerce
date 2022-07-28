export const imagemBannerDescricao = () => {
	let bannerDesc = document.querySelector(".banner__descricao");
	let sessoes = document.querySelectorAll(".produtos");
	let info = JSON.parse(window.localStorage.getItem("produtoInfo"));
	let produtosSimilares = document.querySelectorAll(".produtos__box");

	console.log(info);

	sessoes.forEach(sessao => {
		if (info.categoria !== sessao.id) {
			sessao.style.display = "none";
		} else {
			sessao.firstElementChild.firstElementChild.textContent =
				"Produtos Similares";
		}
	});

	produtosSimilares.forEach(produto => {
		if (produto.id === info.id) {
			produto.style.display = "none";
		}
	});

	bannerDesc.style.background = `url(${info.imagem}) center / cover no-repeat`;
};
