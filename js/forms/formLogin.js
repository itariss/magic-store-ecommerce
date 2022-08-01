import { formContatoValidity } from "./formContato.js";

(() => {
	formContatoValidity();

	const formLogin = document.querySelector("[data-form-login]");

	formLogin.addEventListener("submit", event => {
		event.preventDefault();
		const user = event.target.querySelector("[data-input-user]");
		const password = event.target.querySelector("[data-input-password]");

		if (user.value == "admin@admin.com" && password.value == "admin") {
			window.location.href = "./admin.html";
		} else {
			password.setCustomValidity("Usuário ou Senha não credenciados");
		}
	});
})();
