const newList = document.querySelector('.newList');
const input = document.querySelector('.item');
const submit = document.querySelector('.submit-button');




function todo() {
	const userInput = document.createElement('li');
	const valueOfInput = input.value;
	userInput.innerHTML = valueOfInput;
	newList.append(userInput);
	
}

submit.addEventListener('click', ()=> {
	todo();
	input.value= ''
	})


