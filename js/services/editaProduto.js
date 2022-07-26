import { buscaDados } from "./buscaDados.js";

export const botaoEdita = botoes => {
	const id = botoes.forEach(botao => {
		botao.addEventListener("click", () => {
			let thisId = botao.closest(".produtos__box");
			buscaDados(thisId);
			window.localStorage.setItem(
				"edit",
				JSON.stringify(buscaDados(thisId))
			);
			window.location.href = `../../html/editaProduto.html?id=${thisId.id}`;
		});
	});
};
