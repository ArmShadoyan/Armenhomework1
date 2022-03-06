
// Exercise:1

//sum
let n1 = +prompt()
let n2 = +prompt()

alert(n1 + n2)

//difference
let n1 = +prompt()
let n2 = +prompt()

alert(n1 - n2);

//product
let n1 = +prompt()
let n2 = +prompt()

alert(n1 * n2);

//quotient
let n1 = +prompt()
let n2 = +prompt()

alert(n1 / n2);

//remainder
let n1 = +prompt()
let n2 = +prompt()

alert(n1 % n2);
//--------------------------------------------------------------------

// Exercise:2

let name = prompt("My name is")
let age  = prompt("i am")

//--------------------------------------------------------------------
// Exercise:3
let a = prompt()

if(a%2){
        alert("yes")
}else{
        alert("no")
}
//---------------------------------------------------------------------------------

// Exercise: 4

let a = prompt()

if(a < 0){
        alert("yes")
}else if(a >= 0){
        alert("no")
}else{
        alert("wrong")
}
//------------------------------------------------------------------------

// Exercise: 5

let a = prompt()
let b = prompt()

if(a % b <= 0){
        alert("1")
}else if(b % a <= 0){
        alert("1")
}



else if(a % b  > 0){
    alert("0")
}else if(b % a > 0){
    alert("0")
}


else {
    alert("wrong")
}
//------------------------------------------------------------------------------

// Exercise: 6

let a = prompt();

let message = (a < 2 && a > 0 ) ? 'january' ://էս մեկը "="   ներով չի ստացվել
  (a < 3 && a > 1) ? 'february' :             //դրա համար եմ սենց արել))
    (a < 4 && a > 2) ? 'march' :
    (a < 5 && a > 3) ? 'april' :
    (a < 6 && a > 4) ? 'may' :
    (a < 7 && a > 5) ? 'juny' :
    (a < 8 && a > 6) ? 'july' :
    (a < 9 && a > 7) ? 'august' :
    (a < 10 && a > 8) ? 'september' :
    (a < 11 && a > 9) ? 'october' :
    (a < 12 && a > 10) ? 'november' :
    (a < 13 && a > 11) ? 'december' :
    'wrong';
    
alert( message );
//-------------------------------------------------------------------------------------------

//Exercise: 7

let a = +prompt()
let b = +prompt()
let c = +prompt()
if (a>b && a>c){
        alert("a is maximum")
}else if(b>a && b>c){
        alert("b is maximum")
}else if(c>a && c>b){
        alert("c is maximum")
}else if(a>b && c>b){
        alert("a & c is maximum")
}

