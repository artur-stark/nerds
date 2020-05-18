let popup = document.querySelector(".popup");
let button = document.querySelector(".popup-button");
let close = popup.querySelector(".popup-close");
let send = popup.querySelector(".send");
let name = popup.querySelector('[type="text"]');
let email = popup.querySelector('[type="email"]');
let message = popup.querySelector('textarea');

console.log(popup);
console.log(button);
console.log(close);

button.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.remove("popup-show");
	popup.offsetWidth = popup.offsetWidth;
	popup.classList.add("popup-show");
});
close.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.remove("popup-show");
});
window.addEventListener("keydown", function(evt){
	if (evt.keyCode === 27) {
		if (popup.classList.contains("popup-show")) {
 			evt.preventDefault();
 			popup.classList.remove("popup-show");
 		}
 	}
 });
send.addEventListener("click", function(evt){
	if (!name.value || !email.value || !message.value) {
		evt.preventDefault();
		email.classList.remove("invalid");
		name.classList.remove("invalid");
		message.classList.remove("invalid");	
		if (!name.value) {
			name.classList.add("invalid");
		}
		if (!email.value) {
			email.classList.add("invalid");
		}
		if (!message.value) {
			message.classList.add("invalid");	
		}
	}
});