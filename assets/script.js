//obtain current date
var nowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
console.log(nowMoment);

//Search buttons
$("#search-btn").on("click", function () {
    // var usersSearch = $("#users-search").val();
    var departureDate = $("#departure").val();
    var returningDate = $("#returning").val();
    var originLocation = $("#origin").val().trim();
console.log(originLocation);
    var destinationLocation = $("#dest-location").val().trim();
console.log(destinationLocation);

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/" + originLocation + "-sky/" + destinationLocation + "-sky/" + departureDate + "?inboundpartialdate=" + returningDate,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "9882b1ec54msh8033abef1236139p18bf7djsn6df691b59287"
        }
    }
    
    $.ajax(settings).done(function (response) {

console.log(response);
        
        var countryName = (response.Places[1].CountryName);

console.log(countryName);

//console.log(isoCountries.countryName);

//create array of all full country names and all 2-letter country codes to perform a find and replace
//search the array for the country name and replace it with the corresponding country code
//then enter the country code into the travel advisory apikey


    });

//travel advisory apikey
//"https://www.travel-advisory.info/api?countrycode=" + twoLetterCountryCode

//Levels
//1 Execrcise normal precautions (dark blue)
//2 Exercise increased caution (yellow)
//3 Reconsider travel (orange)
//4 Do not travel (red)

//news apikey
//6324f13fa0a84aac8d7eab29aa0fed5f

//example of newsapi call for all articles mentioning apple from yesterday, sorted by popular publishers first

//http://newsapi.org/v2/everything?q=" + countryName + "&from=" + oneMonthAgo + "to=" nowMoment + "&sortBy=popularity&apiKey=6324f13fa0a84aac8d7eab29aa0fed5f"

});