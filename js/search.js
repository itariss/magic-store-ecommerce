import { recebeProdutos } from "./recebeDadosProdutos.js";

export const search = () => {
	const searchInput = document.querySelector("[data-menu-search]");

	searchInput.addEventListener("input", () => {
		let searchValue = new RegExp(`${searchInput.value}`, "gi");

		console.log(searchValue);

		if (searchInput.value === "") {
			return displayDefault();
		}

		recebeProdutos().then(data => {
			data.forEach(produto => {
				if (searchValue.test(produto.nome)) {
					showBox(produto.id);
				} else if (!searchValue.test(produto.nome)) {
					hideBox(produto.id);
				}

				toggleSection();
			});
		});
	});

	const toggleSection = () => {
		let sessaoCategoria = document.querySelectorAll(".produtos");
		sessaoCategoria.forEach(sessao => {
			if (sessaoCategoria.innerHTML === "") {
				sessao.classList.add("none");
			} else {
				sessao.classList.remove("none");
			}
		});
	};

	const displayDefault = () => {
		const todosProdutos = document.querySelectorAll(".produtos__box");
		todosProdutos.forEach(caixa => {
			caixa.classList.remove("none");
		});
	};

	const hideBox = dadoId => {
		console.log("era para esconder" + dadoId);
		const todosProdutos = document.querySelectorAll(".produtos__box");
		todosProdutos.forEach(caixa => {
			if (dadoId == caixa.id) {
				caixa.classList.add("none");
			}
		});
	};

	const showBox = dadoId => {
		console.log(dadoId);
		const todosProdutos = document.querySelectorAll(".produtos__box");
		todosProdutos.forEach(caixa => {
			if (dadoId == caixa.id) {
				caixa.classList.remove("none");
			}
		});
	};

	const searchIcon = document.querySelector(".menu__searchBtn");

	searchIcon.addEventListener("click", event => {
		const logo = document.querySelector(".menu__logo");
		searchInput.classList.toggle("show");
		logo.classList.toggle("none");
	});
};
