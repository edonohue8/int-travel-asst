// Variables for setting departure and return date as current when starting user input
var field = document.querySelector('#departure');
var field2 = document.querySelector('#returning');
var date = new Date();

var countryName = ''
var twoLetterCountryCode = ''
var settings = ''
var newsURL = ''
var newsArticle = ''
const newsApiKey = "2941a03c379bfc4593a62285a938be82"

// Set the departure date
field.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
    '-' + date.getDate().toString().padStart(2, 0);

// Set the returning date
field2.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
    '-' + date.getDate().toString().padStart(2, 0);

//obtain current date
var currentDay = moment().format('YYYY-MM-DD');
console.log(currentDay);

function buildNewsURL() {
    newsURL = "https://gnews.io/api/v4/search?q=" + countryName + "&lang=en&sortby=relevance&token=" + newsApiKey;
console.log(newsURL);
    return newsURL;
};

//search buttons
$("#search-btn").on("click", function () {
    // var usersSearch = $("#users-search").val();
    var departureDate = $("#departure").val();
    var returningDate = $("#returning").val();
    var originLocation = $("#origin").val().trim();
    
    originLocation = window.airports[originLocation]
    console.log("ORIGIN IS ", originLocation)

    console.log(originLocation);
    var destinationLocation = $("#dest-location").val().trim();
    destinationLocation = window.dairports[destinationLocation]
    console.log("DESTINATION IS ", destinationLocation)
    console.log(destinationLocation);

    console.log(departureDate);
    console.log(returningDate);

    //Code for originAirport drop-down
    let dropdown = $('#origin');

    dropdown.empty();

    dropdown.append('<option selected="true" disabled>Choose Country</option>');
    dropdown.prop('selectedIndex', 0);

    // Populate dropdown with originAirport list
    // notes: getJSON not connecting with JQuery script
    // notes: url needs to be connected to JSON file
    // notes: entry needs to be corrected to pull from originAirports list also
    /* 
    $.getJSON(url, function (data) {
        $.each(data, function (key, entry) {
            dropdown.append($('<option></option>').attr('value', entry.airport).text(entry.name));
        })
    });*/

    //skyscanner api call code
    settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + originLocation + "-sky/" + destinationLocation + "-sky/" + departureDate + "?inboundpartialdate=" + returningDate,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "e97df671fdmsh9c1e5a2b946b77fp11434djsn5f17923a2baa"
        },
    };

    $.ajax(settings).done(function (response) {

        console.log(response);

        //if response contains no data, display "No flights between origin and destination"


        countryName = (response.Places[0].CountryName);

        console.log(countryName);



        //retrieve the 2-letter country code from the list
        console.log(isoCountries[countryName]);

        twoLetterCountryCode = isoCountries[countryName]

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

                // var advisoryMessageDisplay = $("<h3>");
                var advisoryMessage = response.data[twoLetterCountryCode].advisory.message

                $("#travel-advisory").append(advisoryMessage)
                console.log(advisoryMessage);

                var advisorySource = response.data[twoLetterCountryCode].advisory.source
                $("#advisory-url").append(advisorySource)
                console.log(advisorySource);


            });

        //Travel Advisory Levels
        //  1 Exercise normal precautions (dark blue)
        //  2 Exercise increased caution (yellow)
        //  3 Reconsider travel (orange)
        //  4 Do not travel (red)

    newsURL = buildNewsURL();
            $.ajax({
                url: newsURL,
                method: "GET"
            }).then(function (response) {

console.log(response);
console.log(response.articles);

                for (var i = 0; i < 5; i++) {
                headline = (response.articles[i].title);
                story = (response.articles[i].content);
                picture = (response.articles[i].image);
                caption = (response.articles[i].description)
                storyDate = (response.articles[i].publishedAt);
                storySource = (response.articles[i].source.name)
console.log(headline);
console.log(story);
console.log(picture);
console.log(caption);
console.log(storyDate);
console.log(storySource);
                };

            });
        });

            /*
        console.log(response);

        console.log(Object.keys(originAirport)[0]);
        console.log(Object.values(originAirport)[0]);

        console.log(Object.keys(isoCountries)[0]);
        console.log(Object.values(isoCountries)[0]);

        console.log(Object.keys(destinationAirport)[0]);
        console.log(Object.values(destinationAirport)[0]);*/

    });

    window.onload = function(){
        console.log("list of objects is", window.airports)
        for(let airport in window.airports){
            console.log(` ${airport} ==> ${airports[airport]}`)
            $('#origins').append(`<option value="${airport}">`)

        };

        for(let dairport in window.dairports) {
            $('#destinations').append(`<option value="${dairport}">`)
        };
    //$('#origins')
    };