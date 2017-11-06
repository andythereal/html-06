// alert('Hello World!'); 
//console.log(`Hello World!`);
//var helloWorld = 'Hello World!'
//document.write(helloWorld);
const userName = prompt('Eneter Your Name');
document.write('Hello, ' + userName + ' !');
let age = Number (prompt('Your Age'));
prn('You Are: ' +  checkAge(age));
age = age + 1;
prn('Next Year You Will Be: ' + age);

function prn(vaL) {
    document.write('<br>' + vaL);
}
function checkAge(age)  {
    if ((age >= 18) && (age<=60)) { return 'Adult';
    }
    else if (age < 18) { return 'Child';
}
return 'old';
}










