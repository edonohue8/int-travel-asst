

//call flight api
fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "e97df671fdmsh9c1e5a2b946b77fp11434djsn5f17923a2baa"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});