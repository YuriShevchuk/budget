let money, time;

function start() {
    money = +prompt("ваш бюджет на місяць:");
    time = prompt("введіть дату в форматі: YYYY-MM-DD");

    while(isNaN(money) || money == '' || money == null ) {
        money = +prompt("ваш бюджет на місяць:");
    }
}
start();


// console.log(money + " - " + time);

let appData = {
    budget: money,
    timeData: time,
    income: [],
    expenses: {},
    optionalExpenses: {},
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let  a = prompt("Обов'язкова стаття витрат в цьому місяці"),
            b = prompt("У скільки обійдеться?");
            if ( (typeof(a)) ==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 )
            {
                console.log('done!');
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        } 
    },
    detectDayBudget: function() {
        appData.moneyPerDay = ( appData.budget / 30 ).toFixed();
        alert('бюджет на день: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log('мінімальний рівень достатку')
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('середній рівень достатку');
        } else if (appData.moneyPerDay > 2000) {
            console.log('високий рівень достатку');
        } else {
            console.log('виникла помилка');
        }
        
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Яка сума заощаджень?'),
            percent = +prompt('Під який відсоток');
    
            appData.monthIncome = save / 100 / 12 * percent;
            appData.monthIncome = appData.monthIncome.toFixed(1);
            alert('Дохід в місяць з депозиту: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <3; i++) {
            let opt = prompt("Необов'язкові витрати?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items = prompt('З чого можна отримати додатковий прибуток? (перечисліть через кому)', '');
        appData.income = items.split(', ');
        appData.income.push(prompt('Може ще щось'));
        appData.income.sort();
    }
};

 


