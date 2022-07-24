import { apagaDados } from "./apagaDados.js";

export const botaoDeleta = botoes => {
	const id = botoes.forEach(botao => {
		botao.addEventListener("click", () => {
			let thisId = botao.closest(".produtos__box");
			apagaDados(thisId);
			remove(thisId);
			return thisId;
		});
	});
};

function remove(id) {
	id.remove();
}
