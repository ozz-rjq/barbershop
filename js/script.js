;(function(){
	
	/* popup variables */
	var popup = document.querySelector(".modal-content");
	var popupOpen = document.querySelector(".js-popup-open");
	var popupClose = document.querySelector(".modal-content-close");
	var loginField = document.querySelector("#login");
	var passwordField = document.querySelector("#password");

	/* map variables */
	var map = document.querySelector(".map");
	var mapOpen = document.querySelectorAll(".js-map-open");
	var mapClose = document.querySelector(".map-close");

	/* other variables */
	var screenBlackout = document.querySelector(".screen-blackout");
	var showElement = document.querySelector(".js-show");

	/* popup events */
	popupOpen.addEventListener("click", function(event){
		event.preventDefault();
		if(!popup.classList.contains("modal-content-show")){
			popup.classList.add("modal-content-show");
			screenBlackout.classList.add("js-show");
		}
		if(popup.classList.contains("modal-shake"))
			popup.classList.remove("modal-shake");
	});

	popupClose.addEventListener("click", function(event){
		event.preventDefault();
		if(popup.classList.contains("modal-content-show")){
			popup.classList.remove("modal-content-show");
			screenBlackout.classList.remove("js-show");
		}
		if(popup.classList.contains("modal-shake"))
			popup.classList.remove("modal-shake");
	});

	popup.addEventListener("submit", function(event){
		event.preventDefault();

		if((loginField.value === "" || passwordField.value === "") 
				&& !popup.classList.contains("modal-shake"))
			popup.classList.add("modal-shake");
	});

	/* map events */
	for (var i = 0; i < mapOpen.length; i++) {
		mapOpen[i].addEventListener("click", openMap);
	}

	mapClose.addEventListener("click", closeMap);

	function openMap(event){
		event.preventDefault();
		if(!map.classList.contains("js-show")){
			map.classList.add("js-show");
			screenBlackout.classList.add("js-show");
		}
	}

	function closeMap(event){
		event.preventDefault();
		if(map.classList.contains("js-show")){
			map.classList.remove("js-show");
			screenBlackout.classList.remove("js-show");
		}
	}


	/* rest */
	screenBlackout.addEventListener("click", function(event){
		event.preventDefault();
		if(screenBlackout.classList.contains("js-show"))
			screenBlackout.classList.remove("js-show");

		if(popup.classList.contains("modal-content-show"))
			popup.classList.remove("modal-content-show");

		if(map.classList.contains("js-show")){
			map.classList.remove("js-show");
		}
	});



	/* additional */
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

}())