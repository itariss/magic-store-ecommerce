import { formContatoValidity } from "../forms/formContato.js";
import { serverService } from "../serverService.js";
import { novoProduto } from "./novosDados.js";

const formProduto = document.querySelector("[data-form-produto]");

formProduto.addEventListener("submit", async event => {
	event.preventDefault();
	const nome = event.target.querySelector("[data-form-produto-nome]");
	const img = event.target.querySelector("[data-form-produto-imagem]");
	const preco = event.target.querySelector("[data-form-produto-preco]");
	const categoria = event.target.querySelector(
		"[data-form-produto-categoria]"
	);
	const descricao = event.target.querySelector(
		"[data-form-produto-descricao]"
	);

	let ids = await serverService.recebeProdutos();

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

	const expPreco = /[0-9]{1,}[0-9]{2}/;

	if (expPreco.test(preco.value)) {
		preco.setCustomValidity("Somente números e vírgula");
		return;
	}

	novoProduto(
		nome.value,
		img.value,
		preco.value,
		id.value,
		categoria.value,
		descricao.value
	);
	window.location.href = "./admin.html";
});

formContatoValidity();
