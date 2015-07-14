/*
1. Start with the number 74 and set that equal to 'value'

2. Create condition logic to check if the value is great or equal to 85
2-1. If true, add 45 to 'value'
2-2. If false, subtract 32 from 'value'

3. Create a string that is set to 45, add it to 'value'

4. Create an array, loop through 'value' using charAt, set array[i] to each value

5. Remove the first and last values off the array

6. Create a new variable. Loop backwards through the array and store each value into the new Variable, combining each of the values of that array (backwards remember!)

7. parseInt both the 'value' and the new variable created in Step 6, ensure that both 'value' and the new variable are set to these new parsed values;

******* SWITCH PROGRAMMERS *******

8. Add 'value' and the new variable created in Step 6 together and store them in 'value'
1
9. If the new value of 'value' is greater than 5245, set 'value' equal to 9. If not, check to see if it is equal to 4287, if it is, set 'value' equal to 8. 
If neither of these are true, set the value to 7.

10. Create a while loop that counts down from 13 and increments 'value' by 1.

11. Create a function that accepts an argument 'val'. The function should convert 'val' to a String, then drop the first character off the String, but only if there 
is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.

12. Call the function.

13. Console log value. Create an index.html file, link the this Javascript file. Load in the browser, check the value.

14. Your answer should be a String value that equals 1. Is that what you got?
*/


var value=74;

if(value > 85) {
        value += 45;
} else {
        value -= 32;
}

var someString = "45";
value += someString;

var someArray = [];

for (var i = 0; i < value.length; i++) {

        someArray[i] = value.charAt(i);
}

someArray.shift();
someArray.pop();

var newVariable = "";

for (i = 0; i < someArray.length; i++) {

        newVariable += someArray[someArray.length - 1];
}

console.log(newVariable);

value = parseInt(value);
newVariable = parseInt(newVariable);

value += newVariable;

if (value > 5245 ){
	value = 9;
} else if (value == 4287) {
	value = 8;
} else {
	value = 7;
	}

	var j = 13;

while(j <= 13 && j >= 0) {
	value++;
	j--;
}

function someFunc(val) {
	val = val.toString();
	var newarray =[];
	
	
		
	for(var i = 0; i <= val.length; i++) {	
		console.log("Here: " + val[i]);
		newarray[i] = val.charAt(i);
		console.log("wrote: " + val.charAt[i]);
	}
	
	console.log("new array: " + newarray);
	
	if(newarray.length>1){
		newarray.shift();	
	}
	console.log(newarray[0]);
	val = newarray[0];
	console.log(val);
	return val;
	
}

console.log("Here:" + value);
value = someFunc(value);


console.log(value);
