// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// let inputUser = prompt("Enter your city name:")
// if(inputUser === "karachi"){
//     console.log("Welcome to city of lights")

// }else{
//     console.log("Invalid city")
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// let askGender = prompt("Your Gender.?");
// if(askGender === "male"){
//     console.log("Good Morning Sir")
// }else{
//     console.log("Good morning Ma'am.")
// }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red : Must Stop
// Yellow : Ready to move
// Green : Move now

// let userInput2 = prompt("write the name of color road traffic signal");
// if(userInput2 === "red"){
//     console.log("Must Stop");

// }else if(userInput2 === "yellow"){
//     console.log("Ready to Move");

// }else if (userInput2 === "green"){
//     console.log("Move Now");

// }else{
//     console.log("this color is nor include in trafic light's color")
// }

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// // prompt the user to remianing fuel in the car
// let remainingFuel = parseFloat(prompt("Enter the Remaining Fuel in the car(in liters"));

// // check if the remaining fuel in liters
// if(remainingFuel < 0.25){
//     console.log("Please refill the fuel in  your car ");

// }else{
//     console.log("Fuel level is sufficient");
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }                                               // true condition 

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }                                              // false conditiin

//  var c = 12;
// if (c++ === 13){
// console.log("condition 1 is false");
// }
// if (c === 13){
//     console.log("condition 2 is true");   //true condition
// }
// if (++c < 14){
//     console.log("condition 3 is false");
// }
// if(c === 14){
//     console.log("condition 4 is true");    // true condition
// }

//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }                                            // true condition

//  if (true){
// alert("True");
// }
// if (false){
// alert("False");              true condition
// }

// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

let maxMarksPerSubject = 100
let subjects1 = prompt("Enter the first subject name");
let subject2 = prompt("Enter the second subject name");
let subject3  = prompt("Enter the third subject name");

let obtainedMarks1 = parseFloat(prompt("Enter the obtained marks of first subject"));
let obtainedMarks2 = parseFloat(prompt("Enter the obtained marks of second subject"));
let obtainedMarks3 = parseFloat(prompt("Enter the obtained marks of third subject"));

let allSubjectObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3
let totalMarksOfEachSubject = maxMarksPerSubject * 3

let percentage = (allSubjectObtainedMarks / totalMarksOfEachSubject) * 100
console.log(percentage.toFixed(2))

// Determine the grade based on the percentage
let grade ;
let remarks ;

if(percentage >= 80){
    grade = "A-one";
    remarks = "Excellent";
}else if(percentage >= 70){
    grade ="A";
    remarks = "Good";
}else if (percentage >= 60){
   grade = "B";
    remarks = "You Need to Improve";
}else if(percentage <= 60){
    grade = "Fail";
    remarks = "Sorry";

}else{
    Remarks = "Sorry ! you are fail"
}

document.write("<h1>Marks Sheet</h1>")
document.write(`Total marks : ${totalMarksOfEachSubject} <br> <br>`  + `Marks Obtained : ${allSubjectObtainedMarks} <br> </br>` + `Percentage: ${percentage} <br><br>` +
    `Grade : ${grade} <br><br>` + `Remarks : ${remarks}`
)
