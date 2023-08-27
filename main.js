const APIkey = "dfda56122d04af1b23790dd7d2ffc801";

const searchCitites = async(Searchtext) => {
	const response = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}');
	return response.json;
}
	