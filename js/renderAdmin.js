import { criaAdminBtns } from "./admin.js";
import { formContatoValidity } from "./forms/formContato.js";
import { search } from "./search.js";
import { serverService } from "./serverService.js";

(async () => {
	await serverService.criaTodosProdutos();
	criaAdminBtns();
	formContatoValidity();
	search();
})();
