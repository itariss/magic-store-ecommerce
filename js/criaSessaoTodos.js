import { serverService } from "./criaProduto-box.js";

export const criaTodosProdutos = async () => {
	serverService.recebeProdutos().then(() => {
		let containers = document.querySelectorAll(".produtos__container");

		const sessaoTodos = document.querySelector(".produtos");

		sessaoTodos.innerHTML = `
	<div class="produtos__textos">
		<h1 class="produtos__titulo">Todos produtos</h1>
		<a class="produtos__btn--add" href="./novoProduto.html"
			>Adicionar produto
		</a>
	</div>
	<div class="produtos__container" data-container-todos>
</section>`;

		let containerTodos = document.querySelector("[data-container-todos]");

		containers.forEach(container => {
			let containerCopy = container.innerHTML;
			containerTodos.innerHTML += containerCopy;

			container.remove();
		});
		sessaoTodos.appendChild(containerTodos);
	});
};
