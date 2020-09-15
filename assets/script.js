

//call flight api with jquery
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "e97df671fdmsh9c1e5a2b946b77fp11434djsn5f17923a2baa"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

//travel advisory apikey
//"https://www.travel-advisory.info/api?countrycode=" + twoLetterCountryCode

//website with two-letter country codes
//https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
