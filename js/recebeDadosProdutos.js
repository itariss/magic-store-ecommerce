export const recebeProdutos = async () => {
	const dadosProdutos = await fetch(
		"https://my-json-server.typicode.com/itariss/challenge-one-ecommerce/produtos"
	);

	const listaProdutos =
		JSON.parse(window.localStorage.getItem("listaProdutos")) ||
		(await dadosProdutos.json());

	window.localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
	return listaProdutos;
};
