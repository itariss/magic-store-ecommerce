let bannerBg = document.querySelector(".banner__bg");
let imageNum = "1";

let screenWidth = window.innerWidth;

function setNewImage() {
	imageNum++;
	if (imageNum > 3) {
		imageNum = 1;
	}

	if (screenWidth <= 767) {
		bannerBg.style.background = `url(./img/carousel-${imageNum}p.png)center / cover`;
	}

	if (screenWidth > 767) {
		bannerBg.style.background = `url(./img/carousel-${imageNum}m.png)center / cover`;
	}

	if (screenWidth >= 1440) {
		bannerBg.style.background = `url(./img/carousel-${imageNum}.png)center / cover`;
	}
}

setInterval(setNewImage, 3500);
