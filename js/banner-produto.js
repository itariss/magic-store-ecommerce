let bannerDesc = document.querySelector(".banner__descricao");

let imagemSrc = JSON.parse(window.sessionStorage.getItem("imagem"));

console.log(imagemSrc);

bannerDesc.style.background = `url(${imagemSrc}) center / cover no-repeat`;

let produtos = document.querySelectorAll(".produtos__img");

produtos.forEach(imagem => {
	imagem.addEventListener("click", () => {
		window.location.href = "../descricao.html";
		window.sessionStorage.setItem("imagem", JSON.stringify(imagem.src));
	});
});
