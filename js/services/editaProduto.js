import { buscaDados } from "./buscaDados.js";

export const botaoEdita = async botoes => {
	const id = botoes.forEach(botao => {
		botao.addEventListener("click", () => {
			let id = botao.closest(".produtos__box").id;
			buscaDados(id).then(() => {
				window.location.href = `../../html/editaProduto.html?id=${id.id}`;
			});
		});
	});
};
