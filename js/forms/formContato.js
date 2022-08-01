export function formContatoValidity() {
	const formContato = document.querySelector("[data-form-contato]");

	formContato.addEventListener("submit", event => {
		event.preventDefault();
		let inputNome = event.target.querySelector("[data-input-nome]");
		let inputMensagem = event.target.querySelector("[data-input-mensagem]");

		if (inputNome.value.length >= 40) {
			inputNome.setCustomValidity("Tamanho máximo: 40 caracteres");
		}
		if (inputMensagem.value.length >= 40) {
			inputMensagem.setCustomValidity("Tamanho máximo: 120 caracteres");
		}
	});
}
