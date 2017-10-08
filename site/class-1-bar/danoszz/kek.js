// Nederland de gekste jonguh!
function showDutchFlag() {
	var dutchThing = document.querySelectorAll(".dutchthingy");
	var dutchFlag = document.querySelectorAll(".superusefuldiv");
	for (var i = 0; i < dutchThing.length; i++) {
		dutchThing[i].addEventListener("mouseover",function() {
		    dutchFlag[0].classList.add("visible");
		},false);

		dutchThing[i].addEventListener("mouseout", function() {
		    dutchFlag[0].classList.remove("visible");
		}, false);

	}
}
showDutchFlag();
