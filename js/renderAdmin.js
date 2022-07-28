import { criaAdminBtns } from "./admin.js";
import { serverService } from "./serverService.js";

(async () => {
	await serverService.criaTodosProdutos();
	criaAdminBtns();
})();
