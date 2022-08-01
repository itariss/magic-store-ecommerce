let bannerBg = document.querySelector(".banner__bg");
let imageNum = "1";

let screenWidth = window.innerWidth;

function setNewImage() {
	imageNum++;
	if (imageNum > 3) {
		imageNum = 1;
	}
	bannerBg.style.background = `url(./img/carousel-${imageNum}.jpg) center / cover`;
}

setInterval(setNewImage, 3500);
