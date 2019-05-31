document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function() {
	document.querySelector("#button-details").addEventListener("click", function(e) {
		e.preventDefault();
		document.body.classList.add("show-details");
	});
});
