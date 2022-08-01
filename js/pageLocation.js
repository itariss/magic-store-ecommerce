export const htmlDoc = () => {
	let pageName = window.location.pathname.split("/").pop();
	if (pageName === "index.html" || pageName === "") {
		return "html/";
	} else {
		return "";
	}
};

export const userOrAdmin = () => {
	let pageName = window.location.pathname.split("/").pop();
	if (pageName === "admin.html") {
		return `<a class="produtos__btn--add" href="./novoProduto.html"
	>Adicionar produto
</a>`;
	} else {
		return `<a class="produtos__link--secao" href="../index.html"
	>Página Inicial
</a>`;
	}
};

export const isAdmin = () => {
	let pageName = window.location.pathname.split("/").pop();
	if (pageName === "admin.html") {
		return true;
	} else {
		return false;
	}
};
