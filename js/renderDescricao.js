import { imagemBannerDescricao } from "./descricaoProduto.js";
import { serverService } from "./serverService.js";

(async () => {
	const dadosProdutos = await serverService.recebeProdutos();
	serverService.criaSessaoCategoria(dadosProdutos);
	serverService.criaProduto(dadosProdutos);
	imagemBannerDescricao();
	linksProdutos();
})();
