import { serverService } from "./serverService.js";
import { linksProdutos } from "./descricaoLinks.js";
import { formContatoValidity } from "./forms/formContato.js";
import { search } from "./search.js";

(async () => {
	await serverService.criaTodosProdutos();
	linksProdutos();
	formContatoValidity();
	search();
})();
