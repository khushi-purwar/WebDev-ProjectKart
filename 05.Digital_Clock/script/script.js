// By default, time format is 12 hours
// made global variable so that set12Hour() and set24Hour() can able to modify it's value.
let timeFormat = 12;

// update clock update time and date
function updateClock() {
	var now = new Date();
	var time = now.toLocaleTimeString();

	var dayname = now.getDay(),
		month = now.getMonth(),
		date = now.getDate(),
		year = now.getFullYear();

	var months = [
		"Janaury",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	var days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thrusday",
		"Friday",
		"Saturday",
	];

	document.querySelector("#dayname").innerHTML = days[dayname];
	document.querySelector("#month").innerHTML = months[month];
	document.querySelector("#daynum").innerHTML = date;
	document.querySelector("#year").innerHTML = year;

	if (timeFormat == 12) {
		document.querySelector("#time").innerHTML = time;
	} else {
		time = now.toTimeString().slice(0, 8);
		document.querySelector("#time").innerHTML = time;
	}
}

// change time format to 12 hour
function set12Hour() {
	timeFormat = 12;
}

// change time format to 24 hour
function set24Hour() {
	timeFormat = 24;
}

// start the clock
function intiClock() {
	updateClock();

	// invoke updateClock() to update date and time every second
	window.setInterval("updateClock()", 1);
}

// intiClock() called when page gets loaded
intiClock();
