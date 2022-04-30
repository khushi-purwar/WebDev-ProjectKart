function runExample3() {
    $("#custom-places").mapsed({
		showOnLoad: 	
		[
			// Random made up CUSTOM place
			{
				// flag that this place should have the tooltip shown when the map is first loaded
				autoShow: true,
				lat: 53.79,
				lng:-1.5426760000000286,
				name: "SmartEDU",
				street: "Over the rainbow, Up high way",
				userData: 99
			}

		]
		
	});									
}


$(document).ready(function() {
	runExample3();
});


