// Variables for setting departure and return date as current when starting user input
var field = document.querySelector('#departure');
var field2 = document.querySelector('#returning');
var date = new Date();

// Set the departure date
field.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + 
    '-' + date.getDate().toString().padStart(2, 0);

// Set the returning date
field2.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + 
    '-' + date.getDate().toString().padStart(2, 0);

//obtain current date
var currentDay = moment().format('YYYY-MM-DD');
console.log(currentDay);

//search buttons
$("#search-btn").on("click", function () {
    // var usersSearch = $("#users-search").val();
    var departureDate = $("#departure").val();
    var returningDate = $("#returning").val();
    var originLocation = $("#origin").val().trim();
    console.log(originLocation);
    var destinationLocation = $("#dest-location").val().trim();
    console.log(destinationLocation);

//skyscanner api call code
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


    //retrieve the 2-letter country code from the list
console.log(isoCountries[countryName]);

        let twoLetterCountryCode = isoCountries[countryName]

        var travelAdvisoryURL = "https://www.travel-advisory.info/api?countrycode=" + twoLetterCountryCode;

        $.ajax({
            url: travelAdvisoryURL,
            method: "GET"
        })

            .then(function (response) {

// Log the travelAdvisoryURL
console.log(travelAdvisoryURL);

// Log the resulting object
console.log(response);

            });

//Travel Advisory Levels
//  1 Exercise normal precautions (dark blue)
//  2 Exercise increased caution (yellow)
//  3 Reconsider travel (orange)
//  4 Do not travel (red)

    const newsApiKey = "2941a03c379bfc4593a62285a938be82"

    fetch("https://gnews.io/api/v4/search?q=" + countryName + "&lang=en&sortby=relevance&token=" + newsApiKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
    });
});