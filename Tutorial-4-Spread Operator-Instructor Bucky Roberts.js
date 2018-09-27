//functions
//function keyword: function, function name: addNumbers, function parameters: a, b, c

function addNumbers(a,b,c){
//console.log(a+b+c);
}

var nums =  [3,4,7];
addNumbers(...nums);//add numbers using function addNumbers. ?? passing of values through function addNumbers?
//expected outpout: 14 
//spread operators
//spread synax: allows for interable such as an array expression or a string
//to be expaned in two places where zero or more arguments (for function calls)
//or elements (for array literals) are expected, or an object experession to be
//expaned in places where zero or more key value pairs (for object literals)
//are expected


//add arrays together

var meats = ['bacon', 'ham'];
var food = ['apples', ...meats, 'kiwi', 'rice'];
//spread operator used to add elments in array meats starting after index
//zzero of food array
//console.log(food);
//expected output ["apple", "bacon", "ham", "kiwi", rice]
