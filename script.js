const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3b6c1e92f8msh4b5e56f91d70066p16f737jsna16d3679ca8d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
