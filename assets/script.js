

//call flight api with jquery
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/USA/USD/en-US/?query=" + destination,
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


//news apikey
//6324f13fa0a84aac8d7eab29aa0fed5f

//call newsapi for all articles mentioning apple from yesterday, sorted by popular publishers first
//http://newsapi.org/v2/everything?q=apple&from=2020-09-14&to=2020-09-14&sortBy=popularity&apiKey=6324f13fa0a84aac8d7eab29aa0fed5f
