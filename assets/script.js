$(document).ready(function () {
    $("#departure").datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 0
    });
});
$(document).ready(function () {
    $("#returning").datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 0
    });
});
// Variables for setting departure and return date as current when starting user input
var field = document.querySelector('#departure');
var field2 = document.querySelector('#returning');
var date = new Date();
var countryName = ''
var twoLetterCountryCode = ''
var settings = ''
var flightQuote1 = ''
var flightQuote2 = ''
var newsURL = ''
var newsArticle = ''
const newsApiKey = "2941a03c379bfc4593a62285a938be82"
//obtain current date
var currentDay = moment().format('YYYY-MM-DD');
function buildNewsURL() {
    newsURL = "https://gnews.io/api/v4/search?q=" + countryName + "&lang=en&sortby=relevance&token=" + newsApiKey;
    return newsURL;
};
//search buttons
$("#search-btn").on("click", function () {
// var usersSearch = $("#users-search").val();
    var departureDate = $("#departure").val();
    var returningDate = $("#returning").val();
    var originLocation = $("#origin").val().trim();
    originLocation = window.airports[originLocation]
    var destinationLocation = $("#dest-location").val().trim();
    destinationLocation = window.dairports[destinationLocation]
//Code for originAirport drop-down
    let dropdown = $('#origin');
    dropdown.empty();
    dropdown.append('<option selected="true" disabled>Choose Country</option>');
    dropdown.prop('selectedIndex', 0);
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
//if response contains no data, display "No flights between origin and destination"
        if (response.Places.length === 0 || response.Quotes.length === 0) {
            return $("#travel-advisory").text("No flights between origin and destination at this time.")
        }
        countryName = (response.Places[0].CountryName);
//Country name from destination
        if (countryName == "United States") {
            countryName = response.Places[1].CountryName;
        } else {
            countryName = response.Places[0].CountryName;
        };
        for (i = 0; i < response.Quotes.length; i++) {
            var usCurrency = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(response.Quotes[i].MinPrice);
            $("#flight-quote" + (i + 1)).append("Option " + (i + 1) + ": " + usCurrency)
        }
//retrieve the 2-letter country code from the list
        twoLetterCountryCode = isoCountries[countryName]
        var travelAdvisoryURL = "https://www.travel-advisory.info/api?countrycode=" + twoLetterCountryCode;
        $.ajax({
            url: travelAdvisoryURL,
            method: "GET"
        })
            .then(function (response) {
// var advisoryMessageDisplay 
                var advisoryMessage = response.data[twoLetterCountryCode].advisory.message
                var advisoryScore = response.data[twoLetterCountryCode].advisory.score
                if (advisoryScore >= 4.5 && advisoryScore <= 5) {
                    $("#travel-advisory").css({ backgroundColor: "red", color: "white" })
                }
                if (advisoryScore >= 3.5 && advisoryScore <= 4.4) {
                    $("#travel-advisory").css({ backgroundColor: "orange", color: "black" })
                }
                if (advisoryScore >= 2.5 && advisoryScore <= 3.4) {
                    $("#travel-advisory").css({ backgroundColor: "yellow", color: "black" })
                }
                if (advisoryScore >= 0 && advisoryScore <= 2.4) {
                    $("#travel-advisory").css({ backgroundColor: "darkblue", color: "white" })
                }
                $("#travel-advisory").append(advisoryMessage)
                var advisorySource = response.data[twoLetterCountryCode].advisory.source
                var advisorySourceLink = $("<a>").attr("href", advisorySource).text(advisorySource).attr("target", "_blank")
                $("#advisory-url").append(advisorySourceLink)
            });
        newsURL = buildNewsURL();
        $.ajax({
            url: newsURL,
            method: "GET"
        }).then(function (response) {
            for (var i = 0; i < 5; i++) {
                headline = (response.articles[i].title);
                story = (response.articles[i].content);
                picture = (response.articles[i].image);
                caption = (response.articles[i].description);
                storyDate = (response.articles[i].publishedAt);
                storySource = (response.articles[i].source.name);
                articleURL = (response.articles[i].url);
                if (i == 0) {
                    headline1.innerHTML = headline;
                    caption1.innerHTML = caption;
                    storyDate1.innerHTML = storyDate.slice(0, 10);
                    storySource1.innerHTML = storySource;
                    articleURL1.innerHTML = "<a href=" + articleURL + ">Click here for article</a>";
                } else if (i == 1) {
                    headline2.innerHTML = headline;
                    caption2.innerHTML = caption;
                    storyDate2.innerHTML = storyDate.slice(0, 10);
                    storySource2.innerHTML = storySource;
                    articleURL2.innerHTML = "<a href=" + articleURL + ">Click here for article</a>";
                } else if (i == 2) {
                    headline3.innerHTML = headline;
                    caption3.innerHTML = caption;
                    storyDate3.innerHTML = storyDate.slice(0, 10);
                    storySource3.innerHTML = storySource;
                    articleURL3.innerHTML = "<a href=" + articleURL + ">Click here for article</a>";
                } else if (i == 3) {
                    headline4.innerHTML = headline;
                    caption4.innerHTML = caption;
                    storyDate4.innerHTML = storyDate.slice(0, 10);
                    storySource4.innerHTML = storySource;
                    articleURL4.innerHTML = "<a href=" + articleURL + ">Click here for article</a>";
                } else if (i == 4) {
                    headline5.innerHTML = headline;
                    caption5.innerHTML = caption;
                    storyDate5.innerHTML = storyDate.slice(0, 10);
                    storySource5.innerHTML = storySource;
                    articleURL5.innerHTML = "<a href=" + articleURL + ">Click here for article</a>";
                }
            };
        });
    });
});
window.onload = function () {
    for (let airport in window.airports) {
        $('#origins').append(`<option value="${airport}">`)
    };
    for (let dairport in window.dairports) {
        $('#destinations').append(`<option value="${dairport}">`)
    };
};