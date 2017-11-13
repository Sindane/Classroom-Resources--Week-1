//alert("hello");





/*----------------------------------

GOOGLE MAPS SCRIPT

----------------------------------*/

$("span.navBars").click(function() {

	$("#mainMenu").slideToggle();

});

$("#mainMenu").on("click", function() {

	if ($(window).width() < 1024) {

		$("span.navBtn").click();
	}

});
