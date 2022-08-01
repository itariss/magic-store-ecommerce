import { apagaDados } from "./deletaDados.js";

export const botaoDeleta = botoes => {
	const id = botoes.forEach(botao => {
		botao.addEventListener("click", () => {
			if (!confirm(`Tem certeza que deseja excluir esse produto?`)) {
				return;
			}
			let id = botao.closest(".produtos__box");
			apagaDados(id.id);
			id.remove();
			return id;
		});
	});
};
