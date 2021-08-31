const mainContainer = document.querySelector('.mainContainer');
const input = document.querySelector('.input');
const roverImages = document.querySelector('.roverImages')
const roverTitle = document.querySelector('.roverTitle')
const roverDate = document.querySelector('.roverDate')
const roverPic = document.querySelector('.roverPic')
const roverExp = document.querySelector('.roverExp')

async function roverInfo(){
    const fetchRover = await fetch(`https://api.nasa.gov/planetary/apod?date=${input.value}&api_key=IitCQmPSYDlhiGZl8onwp5nbufwOG8hfhyNdPtOG`);
    const jsonRover = await fetchRover.json();
    

	console.log(jsonRover)



	const title = jsonRover.title;
	const date = jsonRover.date;
	const image = jsonRover.url;
	const explanation = jsonRover.explanation;

	
	roverTitle.innerHTML =(`${title}`)
	roverDate.innerHTML = (`${date}`)
	roverPic.src = (`${image}`);
	roverExp.innerHTML = (`${explanation}`);
}



	



const button = document.querySelector('.viewButton');
button.addEventListener('click', () => {
    roverInfo()
}


)
