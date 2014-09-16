
// Function to return "Five!" consecutively three times in the console
var tripleFive = function(){
	for (var i=0; i<3; i++){
	console.log("Five!");
	};
};
tripleFive()

// Function to return the last letter of a word
var lastLetter = function(s){
	var index = s.length-1
	return s[index]
}
var word = prompt("Type a word");
alert('The last letter of '+word + ' is ' + lastLetter(word) +'.');

// function to return the square of a number
var square = function(x){
	return x * x;
}
var number = prompt("Enter a Number");
alert('The square of '+ number + ' is ' + square(number) + '.');

// Function to return the opposite of a given number
var negate = function(n){
	if(n[0] === '-'){
		n = n.replace('-', '');
		return n;
	} else {
		return '-'+ n;
	}
}
var negateNumber = prompt('Enter a number to negate');
alert('The negative of ' + negateNumber + ' is ' + negate(negateNumber) + '.');

Function to return three given values as an array
var toArray = function(x, y, z) {
	var newArray = [];
	newArray[0] = x;
	newArray[1] = y;
	newArray[2] = z;
	return newArray;
};
var x = prompt("Enter a number");
var y = prompt("Enter another number");
var z = prompt("Enter another number");
alert(x + ', ' + y + ', and ' + z + ' have been combined to create array: ' + toArray(x, y, z));


// Function to check if a given word starts with "A"
var startsWithA = function(str) {
	if (str[0] === "A" || str[0] === "a"){
		return true
	} else {
		return false;
	}
};
var aWord = prompt('Enter a word to see if it starts with "A"');
if (startsWithA(aWord) === false){
	alert('The word ' + aWord + ' does not start with A.');
} else {
	alert('The word ' + aWord + ' starts with A.');
};

// Function to add three exclamation points to any given string
var excite = function(unenthusedWord) {
	return unenthusedWord + '!!!';
}
var exciteWord = prompt('Enter a boring word.');
alert(excite(exciteWord));

// Function to tell whether the word "sun" is in a given string
var sun = function(sunWord){
	if (sunWord.indexOf('sun') === -1 && sunWord.indexOf('Sun') === -1){
		return false;
	} else {
		return true;
	};
};
var testWord = prompt('Enter a word to check whether "sun" is contained within');
if (sun(testWord) === false){
	alert('The word "sun" does not appear in ' + testWord);
} else {
	alert('The word "sun" is in the word ' + testWord);
};

// Function to tell whether a number is between 0 and 1 
var tiny = function(tinyNumber){
	if (tinyNumber < 1 && tinyNumber > 0){
		return true;
	} else {
		return false;
	};
};
var tinyNumber = prompt('Enter a number to see whether it is between 0 and 1');
if (tiny(tinyNumber) === false) {
	alert('This number is not between 0 and 1');
} else {
	alert('This number is between 0 and 1');
};

//Function to convert a time span in the format MM:SS into total number of seconds
var getSeconds = function(timeSpan){
	if (timeSpan[2] === ":" && timeSpan[5] === ":"){
		var seconds = timeSpan.split(":");
		return ((+seconds[0]*60*60) + (+seconds[1]*60) + (+seconds[2]));
	} else if (timeSpan[2] === ":") {
		timeSpan = "00:" + timeSpan;
		var seconds = timeSpan.split(":");
		return ((+seconds[0]*60*60) + (+seconds[1]*60) + (+seconds[2]));
	} else {
		return false;
	}
};
var timeSpan = prompt('Enter a time in the format MM:SS');
alert(timeSpan + ' is equal to ' + getSeconds(timeSpan) + ' seconds.');
