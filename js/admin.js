import { botaoDeleta } from "./services/deletaProduto.js";
import { botaoEdita } from "./services/editaProduto.js";

export const criaAdminBtns = () => {
	const adminProdutos = document.querySelectorAll(".produtos__box");

	adminProdutos.forEach(produto => {
		const adminBtns = `<i class="fa-solid fa-pen produtos__admin__btn" data-admin-edit></i><i class="fa-solid fa-trash produtos__admin__btn" data-admin-delete></i>`;
		const adminDiv = document.createElement("div");
		adminDiv.classList.add("produtos__admin");
		adminDiv.innerHTML = adminBtns;
		produto.prepend(adminDiv);
	});
	const botoesDeletar = document.querySelectorAll("[data-admin-delete]");
	const botoesEditar = document.querySelectorAll("[data-admin-edit]");

	botaoDeleta(botoesDeletar);
	botaoEdita(botoesEditar);

	return adminProdutos;
};
