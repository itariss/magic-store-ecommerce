let carousel = document.querySelector(".banner__carousel");
let bannerBg = document.querySelector(".banner__bg");
let imageNum = "1";

function setNewImage() {
	imageNum++;
	if (imageNum > 3) {
		imageNum = 1;
	}
	bannerBg.style.background = `url(../../img/carousel-${imageNum}.jpg)70% / cover`;
	carousel.style.background = `url(./img/carousel-${imageNum}.jpg) center / 100% no-repeat`;
}

setInterval(setNewImage, 3500);
