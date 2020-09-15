//Search buttons


$("#search-btn").on("click", function () {
    // var usersSearch = $("#users-search").val();
    var departureDate = $("#departure").val();
    var returningDate = $("#returning").val();
    var originLocation = $("#origin").val();
    var destinationLocation = $("#dest-location").val();

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
    });
    
//travel advisory apikey
//"https://www.travel-advisory.info/api?countrycode=" + twoLetterCountryCode

//website with two-letter country codes
//https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements


//news apikey
//6324f13fa0a84aac8d7eab29aa0fed5f

//call newsapi for all articles mentioning apple from yesterday, sorted by popular publishers first
//http://newsapi.org/v2/everything?q=apple&from=2020-09-14&to=2020-09-14&sortBy=popularity&apiKey=6324f13fa0a84aac8d7eab29aa0fed5f

});