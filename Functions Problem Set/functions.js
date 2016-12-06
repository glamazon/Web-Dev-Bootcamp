//Function that takes a single numeric arguement and returns
//  true if the number is even, and false otherwise

function isEven(num) {
 return num % 2 === 0;
 }

 //Function which takes a single numerical argument and returns the factorial of that number

 function factorial(num) {

 	//define a result variable
 	var result = 1;
 	//calculate factorial and store value in result
 	for(var i = 2; i <= num; i++){
 		result *= i;
 	}
 	//return the result variable
 	return result;
 }


 //Function which takes a singel debab-cased string argument
 //and returns the snake_cased version

 function kebabToSnake(str) {
//rfeplace all '-' with "_"'s
var newStr = str.replace(/-/g , "_");
//return str
return newStr;
 }