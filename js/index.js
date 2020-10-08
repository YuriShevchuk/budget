let money, time;

function start() {
    money = +prompt("ваш бюджет на місяць:");
    time = prompt("введіть дату в форматі: YYYY-MM-DD");

    while(isNaN(money) || money == '' || money == null ) {
        money = +prompt("ваш бюджет на місяць:");
    }
}
start();


console.log(money + " - " + time);

let appData = {
    budget: money,
    timeData: time,
    income: [],
    expenses: {},
    optionalExpenses: {},
    savings: true
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let  a = prompt("Обов'язкова стаття витрат в цьому місяці"),
        b = prompt("У скільки обійдеться?");
        if ( (typeof(a)) ==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 )
        {
            // console.log('done!');
            appData.expenses[a] = b;
        } 
    } console.log('done!');
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = ( appData.budget / 30 ).toFixed(1);

alert('бюджет на день: ' + appData.moneyPerDay);
}

detectDayBudget();

if(appData.moneyPerDay < 100) {
    console.log('мінімальний рівень достатку')
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('середній рівень достатку');
} else if (appData.moneyPerDay > 2000) {
    console.log('високий рівень достатку');
} else {
    console.log('виникла помилка');
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Яка сума заощаджень?'),
        percent = +prompt('Під який відсоток');

        appData.monthIncome = save / 100 / 12 * percent;
        appData.monthIncome = appData.monthIncome.toFixed(1);
        alert('Дохід в місяць з депозиту: ' + appData.monthIncome);
    }
}
checkSavings();