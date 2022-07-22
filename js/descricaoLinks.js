export const linksProdutos = () => {
	let produtos = document.querySelectorAll(".produtos__img");
	let links = document.querySelectorAll(".produtos__link");
	let linkTodosProdutos = document.querySelector(".produtos__link--secao");

	linkTodosProdutos ? (linkTodosProdutos.href = "./produtos.html") : null;

	produtos.forEach(imagem => {
		imagem.addEventListener("click", () => {
			const todosProdutos = JSON.parse(
				window.localStorage.getItem("listaProdutos")
			);
			let id = imagem.closest(".produtos__box").id;
			let img;
			let sessao;
			let preco;
			let descricao;

			todosProdutos.forEach(produto => {
				if (id == produto.id) {
					sessao = produto.categoria;
					img = produto.src;
					preco = produto.preco;
					descricao = produto.descricao || null;
				}
			});

			const descricaoInfo = {
				id: id,
				imagem: img,
				categoria: sessao,
				preco: preco,
				descricao: descricao
			};

			window.location.href = "./descricao.html";
			window.localStorage.setItem(
				"produtoInfo",
				JSON.stringify(descricaoInfo)
			);
		});
	});

	links.forEach(link => {
		link.addEventListener("click", event => {
			event.preventDefault();
			let img = link.closest(".produtos__box").firstElementChild.src;
			let id = link.closest(".produtos__box").id;
			let sessao =
				link.closest(".produtos__box").parentElement.parentElement.id;

			const descricaoInfo = {
				id: id,
				imagem: img,
				categoria: sessao
			};

			window.location.href = "./descricao.html";
			window.localStorage.setItem(
				"produtoInfo",
				JSON.stringify(descricaoInfo)
			);
		});
	});
};
