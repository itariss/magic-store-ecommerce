export const criaSessaoCategoria = data => {
	const sessoes = [];
	const re = /-/g;
	data.forEach(produto => {
		if (sessoes.includes(`${produto.categoria}`)) {
			return;
		} else {
			sessoes.push(`${produto.categoria}`);
			let sessaoCategoria = `<section id="${
				produto.categoria
			}" class="produtos">
			<div class="produtos__textos">
				<h2 class="produtos__titulo">${produto.categoria.replace(re, " ")}</h2>
				<a
					class="produtos__link--secao"
					href="./html/produtos.html"
					>Ver tudo
					<i class="fa-solid fa-arrow-right"></i>
				</a>
			</div>
			<div class="produtos__container animate__animated animate__slideInRight" data-container-${
				produto.categoria
			}>
			</div>
		</section>`;
			const sessaoProdutos = document.querySelector(".produtos-wrapper");
			sessaoProdutos.innerHTML += sessaoCategoria;

			return sessaoProdutos;
		}
	});
};
