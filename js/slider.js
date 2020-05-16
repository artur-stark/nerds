let slider = document.querySelector(".slide-list");
let radiobar = document.querySelector(".radio-bar");
let slidelist = document.querySelectorAll(".slide");
let radiolist = document.querySelectorAll('[type="radio"]');
let id = 0;

for (let radio of radiolist){
	radio.onclick = function(){
		if (radio.classList.contains("first")) {
			slidelist[0].classList.add("active-slide");
			slidelist[1].classList.remove("active-slide");
			slidelist[2].classList.remove("active-slide");
		} else{
			if (radio.classList.contains("second")) {
				slidelist[1].classList.add("active-slide");
				slidelist[0].classList.remove("active-slide");
			slidelist[2].classList.remove("active-slide");
			} else{
				slidelist[2].classList.add("active-slide");
				slidelist[1].classList.remove("active-slide");
			slidelist[0].classList.remove("active-slide");
			}
		}
}
}