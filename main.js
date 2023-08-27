// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ahmedabad';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9e81ffb5c7msh04605a26809d784p1dbb84jsn8b71c4eb2da9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=ahmedabad',options)
	.then(response =>response.json())
	.then(response =>console.log(response))
	.catch(err =>console.error(err))

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }