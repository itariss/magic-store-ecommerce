export const recebeProdutos = async () => {
	const dadosProdutos = await fetch("http://localhost:3000/produtos");
	const listaProdutos = await dadosProdutos.json();
	return listaProdutos;
};

recebeProdutos().then(data => {
	data.forEach(produto => {
		const conteudo = `<div class="produtos__box">
        <img
        src="${produto.src}"
        alt=""
        class="produtos__img"
        / >
        <div class="produtos__conteudo">
        <h2 class="produtos__nome">${produto.nome}</h2>
        <h2 class="produtos__preco">${produto.preco}</h2>
        <a href="" class="produtos__link">Ver Produto</a>
        </div>
        </div>`;
		const container = document.querySelector(`[${produto.categoria}]`);
		const section = document.querySelector(".produtos__container");

		container
			? (container.innerHTML += conteudo)
			: (section.innerHTML += conteudo);

		return container || section;
	});
});
