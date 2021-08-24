// Madlib

function madlib(name, subject) {
	
	return (`${name}s favorite subject in school is ${subject}.`); 

}
console.log(madlib("Jordan", "English"))



// Tip Calculator

function tipAmount (bill, service) {
	if (service === 'good') {
		return (bill * (.20));
	} else if (service === 'fair') {
		return (bill * (.15));
	} else if (service === 'poor') {
		return (bill * (.10));
	}

}
console.log(tipAmount(50, 'poor'))

// Tip calculator 2


function fullAmount (bill, service) {
		if (service === 'good') {
			return (bill * (.20) + bill);
		} else if (service === 'fair') {
			return (bill * (.15)+ bill);
		} else if (service === 'poor') {
			return (bill * (.10)+ bill);
		}
	}
console.log(fullAmount(100, 'fair'))


// print numbers

function printNumbers (start, end) {
	let x;
	for (x = start; x < end; x++) {
		console.log(x);
		
	}
}


function printNumbers2 (start, end) {
	var x = start;
while (x < end) {
  console.log(x);x++;
}
}


printNumbers2(1,10)



// print a square 


function square(squareDimensions) {
	// loop
	for (let index = 0; index < squareDimensions; index++) {
	  let row = "";
	  for (let index = 0; index < squareDimensions; index++) {
		row += "#";
	  }
	  console.log(row + "");
	}
  }
  square(5);

// print box


// function printBox (width, height){
// 	for (let index = 0; index < width; index++) {
// 		let = '-'
		
// 		for (let index = 0; index < height; index++) {
// 			let = '|'
			
// 		}	
// 		}
				
// 	}
// printBox(5,6) ------not complete------


// print a banner

function banner(message) {
	const line = '-'.repeat(message.length);
	const format = `
	${line}
	${message}
	${line}`;
	
	
	console.log(format);
}

banner("Welcome to DigitalCrafts")


// leetspeak

