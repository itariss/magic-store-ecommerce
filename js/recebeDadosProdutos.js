export const recebeProdutos = async () => {
	try {
		const dadosProdutos = await fetch("http://localhost:3000/produtos");
		const listaProdutos = await dadosProdutos.json();
		return listaProdutos;
	} catch {
		const dadosProdutos = await fetch(
			"https://my-json-server.typicode.com/itariss/challenge-one-ecommerce/produtos"
		);
		const listaProdutos = await dadosProdutos.json();
		return listaProdutos;
	}
};
