// #1
// Given a string with a date "09/10/2021", write a function that removes the "/" and returns the following date format:
// expected result: 20210910



function formatDate() {
let newDate = '09/10/2021';
newDate = newDate.replace(newDate,'20210910');
console.log(newDate)

}
formatDate()

// console.log (20210910)

// #2
// Write a function that checks if a string is a palindrome. Function should return true or false. A palindrome is a word, phrase, or sequence that reads the same backward as forward.
// Ex. racecar, Anna

const str1 = "kayak"
const str2 = "backendisawesome"
const str3 = "mom"

function checkString(str){
const isit = str.split("").reverse().join("");

if (str === isit) {
	console.log('True');
} else {
	console.log('False')
}
}
checkString('kayak')
checkString('backendisawesome')
checkString('mom')


// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// Example
// The minimum sum is  and the maximum sum is . The function prints

// 16 24
// Function Description
// Complete the miniMaxSum function in the editor below.
// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print
// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.
// Input Format
// A single line of five space-separated integers.
// Constraints
// Output Format
// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)
// Sample Input

// 1 2 3 4 5
// Sample Output:

// 10 14




// Write a function that takes in an array of strings and groups anagrams together.

// Anagrams are strings made up of exactly the same letters, where order doesn’t matter. For example, cinema and iceman are anagrams; similarly foo and ofo are anagrams.

// Your function should return a list of anagram groups in no particular order.
// Sample Input
// [“yo”, “act”, “flop”, “tac”, “foo”, “cat”, “oy”, “olfp”]
// Sample Output
// [[“yo”, “oy”], [“flop”, “olfp”], [“act”, “tac”, “cat”], [“foo”]]

const anagInput = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp”]

function anagramGroups ();
