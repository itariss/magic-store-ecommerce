export const zoomImages = images => {
	images.forEach(image => {
		image.addEventListener("mouseover", event => {
			let imageZoom = image.nextElementSibling;
			let screenSize = window.innerWidth;
			if (event.clientX + 400 >= screenSize) {
				imageZoom.classList.add("produtos__img--zoomRight");
			} else {
				imageZoom.classList.add("produtos__img--zoomLeft");
			}

			image.addEventListener("mouseout", () => {
				imageZoom.classList.remove("produtos__img--zoomRight");
				imageZoom.classList.remove("produtos__img--zoomLeft");
			});
		});
	});
};
