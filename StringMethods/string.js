// //String Property : length
var str = 'Hello_World';
        // 012345678910
console.log('The Length of String = ' + str.length);
 

// //String Methods

// //toLowerCase()
 console.log("Lowercase = " + str.toLowerCase());

// //toUpperCase()
console.log('UPPER CASE = ' + str.toLocaleUpperCase());

// //charAt(position)
console.log('The Character at one = ' + str.charAt(1)); //e
console.log('The Character is = ' + str.charAt(5));


// //indexOf(searchstring, position)
// //o.e finding string in a string
// //string starting from the given position and returns the position
// //where the match was found
console.log('The Index is = ' + str.indexOf('World'));  
console.log('The Index is = ' + str.indexOf('world')); // -1 not found, the search is case sensitive







var msg = 'World Web Storm';
// //with second parameter(optional), it allows us to search from given position
 console.log("The Index with parameter = " + msg.indexOf('Storm',10));



// //concat(...strings)
// //joins two or more strings

console.log("The Combined String is = " + str.concat(" ",msg));



// //replace(searchvalue,replacevalue)
// //replaces a specified value with another value in a string
console.log("The Replaced String is = " + msg.replace('World', 'Technology'));






// //Split(separator)
// //A string can be converted to an array 
console.log('The String After Split = ' + msg.split(""));






// var str1 = 'javascript welcome string ';
// var subString = str1.split(' ', 1 );
// console.log("Hello " + subString);







// //substr(start,length)
// //The difference is that the second parameter specifies the length of the extracted part
var fruits = "Apple, Banana, Kiwi";
console.log("The SubStr value is = " + fruits.substr(7,9)); //Banana
console.log("The SubStr value is = " + fruits.substr(3));   //Banana, Kiwi








//trim()
//removes whitespace from both sides of a string
var space = "     MoneyHeist    ";
console.log("hello",space)
console.log("After Trimming = " + space.trim());




