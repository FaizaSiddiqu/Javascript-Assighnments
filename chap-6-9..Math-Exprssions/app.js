// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// let a = 10;
// document.write("The value of a is " , a ,  "<br> <br> ") ;

// document.write("------------------------------------------------ <br><br>")
// ++a
// document.write("Now the value of ++a is " , a , "<br> <br>");
// ++a
// document.write("Now the value of ++a is " ,a , "<br><br>");

// --a
// document.write("Now the value of --a is " , a , "<br><br>" );
// --a
// document.write("Now the value of --a is " , a , "</br>");

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2;
// var b = 1;
// // var result = --a - --b + ++b + b--;
// alert(result)

// --a
// alert(a)
// var result2 = --a - --b 
// alert(result2)

// var result3 = --a - --b + ++b;
// alert(result3)
                //   1  + 3
// var result4 = --a - --b + ++b + b--;
// alert(result4);

// 3--Write a program that takes input a name from user &
// greet the user.

// let userInput = prompt("What is your name ?");
// document.write("Greetings ! My name is " , userInput);

// 4--Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// take a user's input for multiplication table
// let userInput = prompt("Please enter a number for multiplication table" , 5);
// alert(userInput)

// // make atable of 5
// for(let i = 1; i <=10 ; i++){
//     document.write(userInput + " x " + i + " = " , i * userInput, "<br> <br>" )
// }

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.

var subject1 = prompt("Enter the name of the first subject");
var subject2 = prompt("Enter the name of the second subject");
var subject3 = prompt("Enter the name of the third subject");

var totalMarksEachSubject = 100;

var obtainedMarks1 = parseFloat(prompt("Enter the obtained marks for" , subject1 , ":"));
var obtainedMarks2 = parseFloat(prompt("Enter the obtained marks for" , subject2 , ":"));
var obtainedMarks3 = parseFloat(prompt("Enter the obtained marks for" , subject3 , ":"));

let totalObtainedMarks = marks1 + marks2 + marks3;
let totalMarks = totalMarksPerSubject * 3; // Total 300 marks hain (100 each subject)
let percentage = (totalObtainedMarks / totalMarks) * 100;

document.write("<h2>Marks Sheet</h2>");
document.write(subject1 + ": " + marks1 + " out of " + totalMarksPerSubject + "<br>");
document.write(subject2 + ": " + marks2 + " out of " + totalMarksPerSubject + "<br>");
document.write(subject3 + ": " + marks3 + " out of " + totalMarksPerSubject + "<br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + totalObtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");







