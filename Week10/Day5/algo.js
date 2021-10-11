// Anagrams are words or phrases that contain the same number of characters. Create a function that checks a set of two strings, and
// returns 'true' if they are anagrams and returns 'false' if they are not.

string1 = "A gentleman"
string2 = "Elegant man"
//expected result: true

string3 = "Clint Eastwood"
string4 = "Old West action"
//expected result: true

string5 = "idontlikealgos"
string6 = "algoverybad"
//expected result: false


// write a function that capitalizes the first character of every word in a string

phrase1 = "randy doesnt like giving algos"
phrase2 = "arent you glad its friday"
phrase3 = "i wonder whats for lunch today"

const phrase = phrase1.split(" ");
for (let i = 0; i < phrase.length; i++){
	phrase[i] = phrase[i][0].toUpperCase()+ phrase[i].substr(1)
}


console.log(phrase)


//Write a function that finds the missing number in a given integer array

let arr1 = [1,2,3,4,5,6,7,8,10];
count = 10,
missingNumber = []

for (let i = 1; i <=count; i++) {
	if(arr1.indexOf(i) === -1){
		missingNumber.push(i)
	}
}
console.log(missingNumber)
//expect result: 9