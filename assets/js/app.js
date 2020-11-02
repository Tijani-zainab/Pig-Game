/*var name = 'James';
console.log (name);

var LastName = 'Johnson';
console.log (LastName);

var age = 20;
console.log( age);

var fullAge = 'true';
console.log (fullAge);

var sex = 'female/male';
console.log (sex);
*/


// var name ='Zainab';
// var age = 20;
// console.log(name + age);

// var LastName = prompt('what is the lastName?');
// console.log(LastName)


// var now = 2020;
// var birthYear = now - 26;

// birthYear = now - 26 * 8;

// console.log(birthYear);

// var ageJohn = 30;
// var ageMark = 30;

// ageJohn = ageMark = (3 + 5) * 4 - 8;

// ageJohn++;
// ageMark *=2;

// ageMark = ageMark * 2;
// console.log (ageJohn);
// console.log (ageMark);


/*
var name = 'John';
var age = 20;
var isMarried ='no';

if (isMarried === 'no') {
    console.log (name + 'will hopefully marry soon');

} else {
    console.log (name + ' is married!');
}


isMarried = false;

if (isMarried) {
    console.log ('Yes!');
} else {
    console.log ('No!');
}


if (isMarried) {
    console.log ('Yes!');
} 
*/


/*
var age = 20;
if (age < 20){
    console.log ('John is a Teenager');
} else if (age >= 20 && age < 30 ) {
    console.log ('John is a young man');
}
 else {
    console.log ('John is a Man');
}

var job = 'Nurse';

job = prompt('what does John do?');

switch (job) {
    case 'Nurse':
        console.log('John Nurses and look afer kids.');
        break;
    case 'driver':
        console.log('John drives taxi in ayobo');
        break;
    case 'cop':
        console.log('John helps fight crime');
        break;
    default:
        console.log('John does something else');                 
}

*/



/*
var heightSam = 170;
var heightOla = 105;
var ageSam = 26;
var ageOla = 33;

var scoreSam = heightSam + 5 * ageSam;
var scoreOla = heightOla + 5 * ageOla;
*/


/*
if (scoreSam > scoreOla) {
    console.log('Sam wins the game!' + scoreSam + 'points!');
} else if (scoreOla > scoreSam) {
    console.log('Ola wins the game!' + scoreOla + 'points!');
} else if (scoreSam === scoreOla) {
    console.log('its a draw.');
}
*/


/*
var heightZayne = 110;
var ageZayne = 20;

var scoreZayne = heightZayne + 5 * ageZayne;

if (scoreOla > scoreSam && scoreOla > scoreZayne) {
    console.log('Ola wins the game' + scoreOla + 'points!');
} else if (scoreSam > scoreOla && scoreSam > scoreZayne) {
    console.log('Sam wins the game' + scoreSam + 'points!');
} else if (scoreZayne > scoreOla && scoreZayne > scoreZayne) {
    console.log('Zayne wins the game' + scoreZayne + 'points!');
} else if (scoreOla === scoreSam === scoreZayne) {
    console.log('it\'s a tight game!');
}
*/

/*
function calculateAge(yearOfBirth) {
    var age = 2020 - yearOfBirth;
    return age;
}

var ageZayne = calculateAge(2000);
var ageSam = calculateAge(1990);
var ageOla = calculateAge(1948);
console.log(ageZayne);
*/



/*
function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years');
    } else {
        console.log(name + ' has retired');
    } 
   
}
yearsUntilRetirement('Zayne', 2000);
yearsUntilRetirement('Sam', 1990);
yearsUntilRetirement('Ola', 1948);

*/


/*
var names = ['Zayne', 'Ola', 'Sam'];
var years = new Array(2000, 1948, 1990); 

console.log(names[0]);
names[1] = 'Ben';
console.log(names);

var Zayne = ['Zayne', 'Tijani', 2000, 'designer', 'false'];
Zayne.push('white');
Zayne.unshift('Miss');
Zayne.pop();
Zayne.shift();
console.log(Zayne);
*/

// alert(Zayne.indexOf('student'));

/*
if (Zayne.indexOf('student')  === -1) {
    console.log('Zayne is NOT a student');
} 
*/

/*
var Zayne = {
    name: 'Zayne',
    lastName: 'Tijani',
    yearOfBirth: 2000,
    job: 'student',
    isMarried: false,
};

console.log(Zayne.lastName);
console.log(Zayne['lastName']); 

var xyz = 'job';
console.log(Zayne[xyz]);

Zayne.lastName = 'Temitope';
Zayne['job'] = 'designer';

console.log(Zayne);

var Tay = new Object();
Tay.name = 'Tay';
Tay.lastName ='Yusuf';
Tay['yearOfBirth'] = 2001;
Tay['job'] = 'retired';
Tay['isMarried'] = true;

console.log(Tay);

*/



/*
var names = ['Zayne', 'Ola', 'Sam', 'Tay', 'Nel'];


for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length -1; i >= 0; i--) { 
    console.log(names[i]);
}


var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

for (var i =1; i <= 5; i++) {   
    if (i === 3) {
        continue;
    }

    console.log(i);

}

*/



/*
var years = [1990, 2000, 2001, 2005, 2006];
var ages = [];

for (var i = 0; i < years.length; i++) {
    ages[i] = 2016 - years[i];
}

for (i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
        console.log('Person is ' + ages[i] +'years old, and is of full age');
    } else {
        console.log('Person is ' + ages[i] +'years old, and is NOT of full age');  
    }
}
*/



/*
calculateAge(2000);

function calculateAge(year) {
    console.log(2016 - year);
}
 
// retirement(2000);
var retirement = function(year) {
    console.log(65 - (2020 - year));
}


console.log(age);
var age = 20;

function foo() {
    var age = 45;
    console.log(age);
}

foo();
console.log(age);

*/


/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// console.log(this);


/*
calculateAge(2000);

function calculateAge(year) {
    console.log(2016 - year); 
        console.log(this);

}

var Zayne = {
    name: 'Zayne',
    yearOfBirth: 2000,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

Zayne.calculateAge(); 

var Sam = {
    name: 'Sam',
    yearOfBirth: 2000
};

Sam.calculateAge = Sam.calculateAge;
Sam.calculateAge();

*/ 
