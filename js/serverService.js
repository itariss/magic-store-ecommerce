import { recebeProdutos } from "./recebeDadosProdutos.js";
import { criaSessaoCategoria } from "./criaSessao.js";
import { criaProduto } from "./criaProduto-box.js";
import { criaTodosProdutos } from "./criaSessaoTodos.js";

export const serverService = {
	recebeProdutos,
	criaSessaoCategoria,
	criaProduto,
	criaTodosProdutos
};
