let images = [
	"https://images.unsplash.com/photo-1613109526778-27605f1f27d2?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3Mzk5NzF8&ixlib=rb-4.0.3&q=85",
	"https://images.unsplash.com/photo-1568135685167-40caa2154045?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3NDAzMTB8&ixlib=rb-4.0.3&q=85",
	"https://images.unsplash.com/photo-1608387824144-54ccc9591544?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3NDAzOTl8&ixlib=rb-4.0.3&q=85",
	"https://images.unsplash.com/photo-1493589976221-c2357c31ad77?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3NDAzOTl8&ixlib=rb-4.0.3&q=85"
];

function changeBg() {
	document.querySelector(".container").style.background = `url(${
		images[Math.floor(Math.random() * images.length)]
	}) no-repeat center/cover`;
}
