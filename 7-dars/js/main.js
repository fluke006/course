// Alisher App
// var userBudget = Number(prompt("Alisher qancha so'mingiz bor?", 0));

// Magic Number
/*
if (userBudget >= (500 + 250) * 9433.34 + 120 * 10354.03) {
	console.log("Oq yo'l, Alisher");
} else {
	console.log('Biroz sabr qilish kerak ekan');
}
*/
/*
var USD_TO_UZS = 9433.34;
var EURO_TO_UZS = 10354.03;

var flightPriceUSD = 500;
var hotelPriceUSD = 250;
var museumPriceEURO = 120;

var isEnough =
	userBudget >=
	(flightPriceUSD + hotelPriceUSD) * USD_TO_UZS +
		museumPriceEURO * EURO_TO_UZS;

if (isEnough) {
	console.log("Oq yo'l, Alisher");
} else {
	console.log('Biroz sabr qilish kerak ekan');
}
*/

// =====================================
// Shorasul aka App

// var userName = prompt('Ismingizni kiriting?', 'Shorasul');

// // User scores
// var hasTanka =
// 	prompt("Tanish bilishdan bormi? (ha, yo'q)", "yo'q") === 'ha'
// 		? true
// 		: false;
// var scoreIELTS = Number(prompt('IELTS natijangizni kiriting?', 5.5));
// var scoreMath = Number(prompt('Matematika natijangizni kiriting?', 40));

// // if (hasTanka === 'ha') {
// // 	hasTanka = true;
// // } else {
// // 	hasTanka = false;
// // }

// // Requirements
// var IELTS_MIN_SCORE = 5.5;
// var IELTS_SCOLARSHIP_SCORE = 7.5;
// var MATH_MIN_SCORE = 40;
// var MATH_SCOLARSHIP_SCORE = 90;

// // Validation
// var isValidStudent =
// 	hasTanka || (scoreIELTS >= IELTS_MIN_SCORE && scoreMath >= MATH_MIN_SCORE);

// var hasScolarship =
// 	scoreIELTS >= IELTS_SCOLARSHIP_SCORE && scoreMath >= MATH_SCOLARSHIP_SCORE;

// if (isValidStudent) {
// 	var studentType = 'Kontrakt';

// 	if (hasScolarship) {
// 		studentType = 'Grant';
// 	}

// 	console.log(`${userName} WIUT'ga kirdingiz, ${studentType}`);
// } else {
// 	console.log("WIUT'ga kirmadingiz");
// }'

// Document Object Model
// var elHeading = document.querySelectorAll('h1');
// console.log(elHeading[1]);

// var elHeading = document.querySelector('.page__heading');
// var elParagraph = document.querySelector('#page__description');

// var elParagraphById = document.getElementById('page__description');
// var elHeadings = document.getElementsByClassName('page__heading');
// var elHeadingByTag = document.getElementsByTagName('h1');

// console.log(list);
// var elLi = document.querySelector('#list li:nth-child(3)');

// var elListBefore = document.querySelector('#list::before');
// console.log(elListBefore);

var elForm = document.querySelector('.form');
var elUserInput = document.querySelector('.form__user-input');
var elOpponentSelect = document.querySelector('.form__opponent-select');
var elResult = document.querySelector('.form__result');
var elHeading = document.querySelector('h1');

console.log(elHeading.textContent);

elHeading.textContent = 'EFC';

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();

	var inputValue = elUserInput.value;
	var selectValue = elOpponentSelect.value;

	elResult.textContent = `${inputValue} vs ${selectValue}`;
});
