export const imagemBannerDescricao = () => {
	let bannerDesc = document.querySelector(".banner__descricao");
	let sessoes = document.querySelectorAll(".produtos");
	let info = JSON.parse(window.localStorage.getItem("produtoInfo"));
	let produtosSimilares = document.querySelectorAll(".produtos__box");

	sessoes.forEach(sessao => {
		if (info.categoria !== sessao.id) {
			sessao.style.display = "none";
		} else {
			sessao.firstElementChild.firstElementChild.textContent =
				"Produtos Similares";
		}
	});

	produtosSimilares.forEach(produto => {
		if (produto.id == info.id) {
			produto.style.display = "none";
		}
	});

	bannerDesc.innerHTML = `<img src="${info.imagem}" class="banner__img" data-banner-img/>`;

	const bannerImage = document.querySelector("[data-banner-img]");

	zoomInOut(bannerImage);

	criaDescricao(info);
};

function verificaConteudo(info) {
	if (info.descricao !== null) {
		return info.descricao;
	} else {
		return `Voluptas voluptatum quibusdam similique, class debitis alias
		maecenas eveniet ridiculus, facilis fusce! Ullam conubia?
		Sociis, minima malesuada habitasse distinctio sequi aliqua
		malesuada. Quisque deleniti proin expedita, aliquid litora.
		Iste recusandae? Commodo, quia ridiculus doloribus vero
		dictum? Penatibus donec placeat faucibus, dolorum do. Animi
		porta anim magnam`;
	}
}

const criaDescricao = info => {
	const conteudo = `<h2 class="descricao__titulo">${info.nome}</h2>
				<h3 class="descricao__preco">R$ ${info.preco}</h3>
				<p class="descricao__conteudo">
					${verificaConteudo(info)}
				</p>`;

	const descricaoContainer = document.querySelector("[data-descricao]");

	return (descricaoContainer.innerHTML = conteudo);
};

const zoomInOut = element => {
	element.addEventListener("click", () => {
		console.log("ouviu?");
		element.classList.toggle("banner__img--Zoom");
	});
};
