import { imagemBannerDescricao } from "./descricaoProduto.js";
import { serverService } from "./serverService.js";
import { linksProdutos } from "./descricaoLinks.js";
import { formContatoValidity } from "./forms/formContato.js";
import { search } from "./search.js";

(async () => {
	const dadosProdutos = await serverService.recebeProdutos();
	serverService.criaSessaoCategoria(dadosProdutos);
	serverService.criaProduto(dadosProdutos);
	imagemBannerDescricao();
	linksProdutos();
	formContatoValidity();
	search();
})();
