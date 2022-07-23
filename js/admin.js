import { criaTodosProdutos } from "./descricao-produtos.js";

criaTodosProdutos().then(() => {
	setTimeout(() => {
		const adminProdutos = document.querySelectorAll(".produtos__box");

		adminProdutos.forEach(produto => {
			const adminBtns = `<i class="fa-solid fa-pen produtos__admin__btn" data-admin-edit></i><i class="fa-solid fa-trash produtos__admin__btn" data-admin-edit></i>`;
			const adminDiv = document.createElement("div");
			adminDiv.classList.add("produtos__admin");
			adminDiv.innerHTML = adminBtns;
			console.log(produto);
			produto.prepend(adminDiv);
		});

		return adminProdutos;
	}, 1000);
});
