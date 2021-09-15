console.log('hi')

async function getFoxPics() {
	const foxpics = await fetch('https://randomfox.ca/floof/');
	const jsonfox = await foxpics.json();
	const foxPic = document.createElement('img')
	console.log(jsonfox);
	return jsonfox;
}	
getFoxPics()