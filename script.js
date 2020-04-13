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
	savings: true,
	chooseExpenses: function() {
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
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
    	alert("Щоденний бюджет: " + appData.moneyPerDay);
	},
	detectLevel: function() {
		if(appData.moneyPerDay < 100) {
			console.log("Мінімальний рівень");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Середній рівень");
		} else if (appData.moneyPerDay > 2000) {
			console.log("Високий рівень");
		} else {
			console.log("Помилка!");
		}
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt("Яка сума збережень?"),
				percent = +prompt("Під який відсоток?");
				
			appData.monthIncome = save/100/12*percent;
			alert("Дохід в місяць з вашого депозиту: " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() {
		for (let i = 1; i < 3; i++) {
			let opt = prompt("Введіть необов'язкову статттю трат в цьому місяці");
			appData.optionalExpenses[i] = opt;
		}
	},
	chooseIncome: function() {
		for (let i = 0; i < 1; i++) {
			let items = prompt('Що принесе додатковий дохід? (Перечисліть через кому', '');
			
			if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
			&& a != '' && b != '' )	{
				appData.income = items.split(', ');
				appData.income.push(prompt("Може щось забули? Напишіть!"));
				appData.income.sort();	
			}
			else {
				alert("Запишіть, будь ласка, додаткові статті!");
				i--;
			}
		}
	}	
};

for (let key in appData) {
	console.log(key + ": " + appData[key]);
};