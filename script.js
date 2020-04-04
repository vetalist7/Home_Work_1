'use script'

let money = +prompt("Ваш бюджет на місяць?", ''),
	time = prompt('Введіть дату в форматі YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

// for (let i = 0; i < 2; i++) {
// 	let a = prompt("Введіть обов'язкову статттю трат в цьому місяці", ''),
// 		b = prompt("В яку суму обійдеться?", '');
		
// if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
// 	&& a != '' && b != '' && a.length< 50 ) {
// 	console.log('done');	
// 	appData.expenses[a] = b;
// } else {
// 	console.log("Bad result!");
// 	i--;
// 	};
// };

let i = 0;
while (i < 2) {
	let a = prompt("Введіть обов'язкову статттю трат в цьому місяці", ''),
		b = prompt("В яку суму обійдеться?", '');
		i++;

if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
	&& a != '' && b != '' && a.length< 50 ) {
	console.log('done');	
	appData.expenses[a] = b;
} else {
	console.log("Bad result!");
	i--;
	};
};

appData.moneyPerDay = appData.budget / 30;

alert("Щоденний бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
	console.log("Мінімальний рівень");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Середній рівень");
} else if (appData.moneyPerDay > 2000) {
	console.log("Високий рівень");
} else {
	console.log("Помилка!");
};