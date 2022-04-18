// Foursquare API Info
const foursquareKey = "";
const url = "";

// OpenWeather Info
const openWeatherKey = "";
const weatherUrl = "";

// Page Elements
const $input = $("#city");
const $submit = $("#button");
const $destination = $("#destination");
const $container = $(".container");
const $placeDivs = [$("#place1"), $("#place2"), $("#place3"), $("#place4")];
const $weatherDiv = $("#weather1");
const weekDays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const options = {
	method: "GET",
	headers: {
		Accept: "application/json",
	},
};

// Add AJAX functions here:
const getPlaces = () => {};

const getForecast = () => {};

// Render functions
const renderPlaces = (places) => {
	$placeDivs.forEach(($place, index) => {
		// Add your code here:

		const placeContent = "";
		$place.append(placeContent);
	});
	$destination.append(`<h2>${places[0].location.locality}</h2>`);
};

const renderForecast = (forecast) => {
	const weatherContent = "";
	$weatherDiv.append(weatherContent);
};

const executeSearch = () => {
	$placeDivs.forEach((place) => place.empty());
	$weatherDiv.empty();
	$destination.empty();
	$container.css("visibility", "visible");
	getPlaces();
	getForecast();
	return false;
};

$submit.click(executeSearch);
