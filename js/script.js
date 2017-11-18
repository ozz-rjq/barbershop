var popup = document.querySelector(".modal-content");
var popupOpen = document.querySelector(".js-popup-open");
var popupClose = document.querySelector(".modal-content-close");

var screenBlackout = document.querySelector(".screen-blackout");
var showElement = document.querySelector(".show-js");


popupOpen.addEventListener("click", function(event){
	event.preventDefault();
	if(!popup.classList.contains("modal-content-show")){
		popup.classList.add("modal-content-show");
		screenBlackout.classList.add("show-js");
	}
});

popupClose.addEventListener("click", function(event){
	event.preventDefault();
	if(popup.classList.contains("modal-content-show")){
		popup.classList.remove("modal-content-show");
		screenBlackout.classList.remove("show-js");
	}
});

screenBlackout.addEventListener("click", function(event){
	event.preventDefault();
	if(screenBlackout.classList.contains("show-js"))
		screenBlackout.classList.remove("show-js");

	if(popup.classList.contains("modal-content-show"))
		popup.classList.remove("modal-content-show");
})




var infoAlert = document.querySelector(".main-navigation > ul li:first-child");
var newsAlert = document.querySelector(".main-navigation > ul li:nth-child(2)");

infoAlert.addEventListener("click", function(event){
	event.preventDefault();
	alert("\"Information\" page wasn't created!");
});

newsAlert.addEventListener("click", function(event){
	event.preventDefault();
	alert("\"News\" page wasn't created!");
});