/*   Get the document element objects with the id's operand1; operand2; and answer, 
     and assign to variables. Name the variables operand1, operand2, and answer.
     These are used to get input from the user to perform the specified 
     math calculation, and to display the result of the operation.
     
     Place the code directly below this comment.
*/
var answer = document.getElementById("answer");
var operand1 = document.getElementById("operand1");
var operand2 = document.getElementById("operand2");

/* Wrapper function: This function is used to assign event handler functions 
   for the four calculator buttons: plus, minus, multiply, and divide.  It returns the
   appropriate event function handler for the specified operation parameter.
   
   Note: The JavaScript Number function is used to convert the operand values from
   strings to numbers before the math operation is performed.
*/

function getOperation(operation){
	if(operation === "add"){
		return function (){ 
			answer.value = Number(operand1.value) + Number(operand2.value); 
		} 
	}else if(operation === "subtract"){
		return function (){ 
			answer.value = Number(operand1.value) - Number(operand2.value); 
		}
	}else if(operation === "multiply"){
		return function (){ 
			answer.value = Number(operand1.value) * Number(operand2.value); 
		}
	}else if(operation === "divide"){
		return function (){ 
			answer.value = Number(operand1.value) / Number(operand2.value); 
		}
	}
}

/* Call the getOperation wrapper function for the specified math function.  The appropriate 
   event handler function will be returned and assigned to the onclick event property for the 
   appropriate math operation button element object.
*/ 

//Assign math button event handler functions here
document.getElementById("add").onclick = getOperation("add");
document.getElementById("subtract").onclick = getOperation("subtract");
document.getElementById("multiply").onclick = getOperation("multiply");
document.getElementById("divide").onclick = getOperation("divide");