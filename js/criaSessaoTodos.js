import { userOrAdmin } from "./pageLocation.js";
import { serverService } from "./serverService.js";

export const criaTodosProdutos = async () => {
	const dadosProdutos = await serverService.recebeProdutos();
	serverService.criaSessaoCategoria(dadosProdutos);
	serverService.criaProduto(dadosProdutos);
	let containers = document.querySelectorAll(".produtos__container");

	const sessaoTodos = document.querySelector(".produtos");

	sessaoTodos.innerHTML = `
	<div class="produtos__textos">
		<h1 class="produtos__titulo">Todos produtos</h1>
		${userOrAdmin()}
	</div>
	<div class="produtos__container" data-container-todos>
</section>`;

	let containerTodos = document.querySelector("[data-container-todos]");

	containers.forEach(container => {
		let containerCopy = container.innerHTML;
		containerTodos.innerHTML += containerCopy;

		container.remove();
	});
	removeLinks();
	sessaoTodos.appendChild(containerTodos);
};

export const removeLinks = () => {
	const productBoxes = document.querySelectorAll(".produtos__box");

	productBoxes.forEach(box => {
		let link = box.lastElementChild.lastElementChild;
		link.outerHTML = `<p>ID: #${box.id}</p>`;
	});
};
