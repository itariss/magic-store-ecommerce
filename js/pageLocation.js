export const htmlDoc = () => {
	if (window.location.pathname.split("/").pop() === "index.html") {
		return "html/";
	} else {
		return "";
	}
};
