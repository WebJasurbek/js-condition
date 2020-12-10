var age = prompt('Enter your age..')

if (age <= 18) {
  console.log("You are young. You have to study somewhere");
} else if (age >= 18 && age <= 50) {
  console.log("You have to work");
} else if (age >= 50 && age <= 59) {
  console.log("You will retire soon");
} else if (age >= 59 && age <= 160) {
  console.log("You are looking like pensioner, if you are still alive");
} else {
  console.log("There is something wrong");
}



var a = +prompt('Enter the number 1')
var b = +prompt('Enter the number 2')
var c = +prompt('Enter the number 3')

if (a > b && a >= c ) {
    var big = a

    console.log('The larger the numbers you enter ' +  big );
} else if(b > a && b >=c ) {
    var big = b

    console.log('The larger the numbers you enter ' +  big );

} else if(c > a && c > b) {
    var big = c

    console.log('The larger the numbers you enter ' +  big );
} else {
   alert ("something is wrong..");  
}


if (a < b && a <= c){
    var small = a

    console.log('The smaller the numbers you enter ' +  small );
} else if(b < a && b <=c){
    var small = b

     console.log(' The smaller the numbers you enter ' + small );
} else if(c < a && c < b){
    var small = c

     console.log('The smaller the numbers you enter '  + small );
} else {
    alert ("something is wrong..");  
}
 

if (a >= b && a <= c || a <= b && a >= c){
    var center = a

     console.log(' The center the numbers you enter ' +  center );
} else if(b >= a && b <= c || b <= a && b >= c){
    var center = b

    console.log(' The center the numbers you enter ' +  center );
} else if(c >= a && c <= b || c <= a && c >= b){
    var center = c

    console.log(' The center the numbers you enter '  +  center );
} else {
   alert ("something is wrong..");
}

 
alert (' The center the numbers you enter '  +  center )

var name = prompt('Enter your name..')

if( name == 'jack') {
console.log('Hello boss');
alert('Hello boss');
} else {
    console.log('hello guest');
    
    alert('hello guest');

}












