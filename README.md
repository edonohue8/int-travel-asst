# USER STORY

## International Travel Decision Assistant App

AS someone considering international travel

I WANT to find information about flights, news, travel risk, and other relevant data to assist in my decision whether to travel internationally

SO THAT I can make an informed decision on whether to travel to various destinations

# ACCEPTANCE CRITERIA

GIVEN I am looking for information on international travel locations

WHEN I enter an origin, a destination, and travel dates

THEN I am shown 

* relevant flight information using the entered criteria

* travel advisory information for the selected destination

*  recent news for the selected destination

## Synopsis

For our first project, we created a website tailored for airline travelers in proximity to major US airport hubs for upcoming international trips.  After the user enters all of his/her pre-flight information (i.e. dates, origin, and destination), he/she will be presented with travel advisory information, flights quotes, and news relevant to the destination city/country.

## Motivation

Preparing to travel can be daunting.  We offer an informative solution to initiate that process for any traveler in the US thinking about taking a trip internationally.  You don’t have to search in many areas for these different types of information; offering a very user-friendly experience.

### Our Process/Steps

Our first step was to connect to all of our selected APIs.  This included APIs for flight information, travel advisory information, and news.  The date selection connected with our flight information API.  We created a drop-down utilizing the JQuery UI for date-picker.  Afterwards, we compiled lists for origin location and destination drop-downs.  The origin list includes a list of major US airport hubs, while the destination drop-down consists of varied list of popular international destinations.  To pull all the information from these API sources, a search button was created.  A  button to clear results was also added to reset the search.

In order to display the output of API information effectively, we made selections from the API response that served our website's needs.  In regards to the travel advisory information, this included the score and message.  We also color coded each level based on each advisory level.  For the flight information API, we pulled flight quote information.  Finally, we utilized the news API to display stories relevant to the user's destination country entered. 

For our styling/css framework, our group used Bulma.  It was utilized to organize sections on our website and create a clean effective layout.  Lastly, we added an about section to give any visitors details about what our website is about.

## API References

* Flight information - Skyscanner via RapidAPI (https://rapidapi.com/skyscanner/api/skyscanner-flight-search/details)
* Travel Advisory - travel-advisory.info (https://www.travel-advisory.info/data-api)
* News - GNews (https://gnews.io/docs/v3#introduction)

## Built With

* HTML
* CSS (framework - Bulma)
* Javascript (including jQuery)

# Submission

* The URL of the deployed application is https://edonohue8.github.io/project-1/

* The URL of the GitHub repository is https://github.com/edonohue8/project-1/tree/add-html-skeleton

## Screenshot of Website Page

<img src="index.png" width="600">

## Authors

* Choyo Matsuta
* Christian Escherich
* Eric Donohue
* Joe Telezinski

## Acknowledgements

* Our instructor and the TA
* Tutors
