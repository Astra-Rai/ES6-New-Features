//example1
//function circleArea1(r){
//  var PI = 3.14
 // return PI * r * r;

//console.log(circleArea1(7));
//example2 - arrow function, leave out keyword functioin
//let circle2 = (r) => {
//    var PI =3.14;
//    return PI * r * r;
//}
//note that after closing of function there is a semicolon
//console.log(circle2(7));
//console.log(circle2(4));

//the code above can bet written in one lie
//let circleArea3 = r => 3.14 *r *r;
//console.log(circleArea3(3))

//Tutorial 3 -Template Literals
//The old way

let name = 'Bucky';
//old way to concatenate variable and string
//console.log('My favorite person is '+ name +' because he  smells good');

//template literals
//instead of ' + name + ', use ${name}, 
console.log(`My favorite person is ${name}`);

//template literals allows one to include snippes of javascript i

//another examle
let a = 5;
let b = 7;

//console.log(`My favorite person is ${a + b} because he smells good`);
//notice above that you can add the vaules of a and b here, bu t
//is not recommended. one should always seperate logic for formatting
//so you'd have:
let e = 5; 
let f = 7; 
let g = e + f; 
//console.log(`the sum of e and f is ${g}`);