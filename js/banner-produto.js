let bannerDesc = document.querySelector(".banner__descricao");
let imagemSrc = JSON.parse(window.sessionStorage.getItem("imagem"));
let produtosStarWars = document.querySelector("#starwars");
let produtosConsole = document.querySelector("#consoles");
let produtosDiversos = document.querySelector("#diversos");

console.log(imagemSrc);

bannerDesc.style.background = `url(${imagemSrc}) center / cover no-repeat`;

let produtos = document.querySelectorAll(".produtos__img");

produtos.forEach(imagem => {
	imagem.addEventListener("click", () => {
		window.location.href = "./descricao.html";
		window.sessionStorage.setItem("imagem", JSON.stringify(imagem.src));
	});
});

console.log(produtosConsole);

if (imagemSrc.includes("principal")) {
	produtosConsole.style.display = "none";
	produtosDiversos.style.display = "none";
}

if (imagemSrc.includes("secundaria")) {
	produtosDiversos.style.display = "none";
	produtosStarWars.style.display = "none";
}

if (imagemSrc.includes("diversa")) {
	produtosConsole.style.display = "none";
	produtosStarWars.style.display = "none";
}
