const formProduto = document.querySelector("[data-form-produto]");

formProduto.addEventListener("submit", event => {
	event.preventDefault();
	const nome = event.target.querySelector("[data-form-produto-nome]").value;
	const img = event.target.querySelector("[data-form-produto-imagem]").value;
	const preco = event.target.querySelector("[data-form-produto-preco]").value;
	const categoria = event.target.querySelector(
		"[data-form-produto-categoria]"
	).value;
	const descricao = event.target.querySelector(
		"[data-form-produto-descricao]"
	).value;

	let ids = JSON.parse(window.localStorage.getItem("listaProdutos"));
	console.log(ids);

	const findId = () => {
		let counter = 1;
		ids.forEach(produto => {
			console.log(counter);
			if (produto.id === counter + 1) {
				return (counter += 2);
			}
			counter++;
		});
		return counter;
	};

	const id = findId();

	novoProduto(nome, img, preco, id, categoria, descricao);
	window.location.href = "./admin.html";
});

export const novoProduto = async (
	nome,
	img,
	preco,
	id,
	categoria,
	descricao
) => {
	const novoProduto = {
		nome: nome,
		src: img,
		preco: preco,
		id: id,
		categoria: categoria,
		descricao: descricao
	};
	const todosProdutos = JSON.parse(
		window.localStorage.getItem("listaProdutos")
	);

	todosProdutos.push(novoProduto);
	return window.localStorage.setItem(
		"listaProdutos",
		JSON.stringify(todosProdutos)
	);
};
