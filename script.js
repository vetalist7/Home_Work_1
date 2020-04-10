'use script'

let money, time;

function start() {
	money = +prompt("Ваш бюджет на місяць?", '');
	time = prompt('Введіть дату в форматі YYYY-MM-DD', '');

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на місяць?", '');		
	}
}

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введіть обов'язкову статттю трат в цьому місяці", ''),
			b = prompt("В яку суму обійдеться?", '');
			
	if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
		&& a != '' && b != '' && a.length < 50 ) {
		console.log('done');	
		appData.expenses[a] = b;
	} else {
		i--;
		}
	}
}
chooseExpenses();

function chooseOptExpenses() {
	for (let i = 0; i < 3; i++) {
		let a = prompt("Введіть необов'язкову статттю трат в цьому місяці", ''),
			b = prompt("В яку суму обійдеться?", '');
			
	if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
		&& a != '' && b != '' && a.length < 50 ) {
		console.log('done');	
		appData.optionalExpenses[a] = b;
	} else {
		i--;
		}
	}
}
chooseOptExpenses();

function detectDayBudget () {
	appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Щоденний бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
	if(appData.moneyPerDay < 100) {
		console.log("Мінімальний рівень");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Середній рівень");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Високий рівень");
	} else {
		console.log("Помилка!");
	}
}
detectLevel();

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Яка сума збережень?"),
			percent = +prompt("Під який відсоток?");
			
		appData.monthIncome = save/100/12*percent;
		alert("Дохід в місяць з вашого депозиту: " + appData.monthIncome);
	}
}

checkSavings();

