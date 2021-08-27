console.log('hello')
const input = document.querySelector('.input');
const submitBUtton = document.querySelector('.submitButton');
const weatherInfo = document.querySelector('.weatherInfo');
const weatherInfo2 = document.querySelector('weatherInfo2');

async function weatherApp() {
	const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&appid=c9ff1e209833ecc33496bc7e4f32a437`;
	const fetchWeather =  await fetch(weatherUrl);
	const jsonWeather = await fetchWeather.json();
	console.log(jsonWeather)
	const temp = jsonWeather.main.temp;
	weatherInfo.innerHTML = (`The weather is currently ${temp}`);
}	

submitBUtton.addEventListener('click', () => {
	weatherApp()
	input.value= ''})