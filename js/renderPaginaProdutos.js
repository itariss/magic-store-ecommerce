import { serverService } from "./serverService.js";
import { linksProdutos } from "./descricaoLinks.js";

(async () => {
	await serverService.criaTodosProdutos();
	linksProdutos();
})();
