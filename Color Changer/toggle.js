var button = document.querySelector ("button");
var isPurple = false;

button.addEventListener("click", function(){
	if(isPurple) {
		document.body.classList.toggle("purple");
	});