console.log('this sucks')

const input = document.querySelector ('.input');
const searchButton = document.querySelector('.searchButton');
const movieSearchArea = document.querySelector('.movieSearchArea')



async function movieSearch() {
 movieSearchArea.innerHTML = "";
    
 const fetchMovies = await fetch(`http://www.omdbapi.com/?apikey=eceed579&s=${input.value}`);
 const jsonMovies = await fetchMovies.json();
//  console.log(jsonMovies.Search);


for (const movie of jsonMovies.Search){
	
	const movieArea = document.createElement('div');
	movieArea.className = 'movieAreaInfo';
	const movieImg = document.createElement('img');
	const movieName = document.createElement('h3');
	movieName.innerHTML = movie.Title;
	movieImg.src = movie.Poster

	


	movieArea.append (movieImg, movieName)

	movieSearchArea.append(movieArea)

}
}
searchButton.addEventListener('click', () => {
	movieSearch()
	input.value = ''
})