// //  Arrays
// // 2. Declare an empty array using JS object notation to store
// // student names in future.
// let emptyarr : string[ ]= [];
// // 3. Declare and initialize a strings array.
// // 4. Declare and initialize a numbers array.
// // 5. Declare and initialize a boolean array.
// // 6. Declare and initialize a mixed array.
// // 7. Declare and Initialize an array and store available
// // education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// // BS, BCOM, MS, M. Phil., PhD). Show the listed
// // qualifications in your browser like:
// // Declare and initialize a strings array.
// let friends  = ["sana", "Areeba", "Bushra"];
// // Declare and initialize a numbers array.
// let numArr = [1 ,2,3,4,5,6];
// //Declare and initialize a boolean array
//  let booleanArr = [true , false];
// // Declare and initialize a mixed array.
// let mixedArr = ["Aisha","Zoya ", true ,  "Fatima" , 4 ,5 ,6]
// // Declare and Initialize an array and store available education
// let qualifications  = ["SSC", "HSC", "BCS" , "BS" , "BCOM" , "MS" , "M.PHIL" , "PHD"];
// document.write("<h2>Education Qualification Available in Pakistan<h2>")
// document.write("<ol>")
// // loop to display available qualification
// for(let i = 0 ; i < qualifications.length; i++){
//     document.write("<li>" + qualifications[i] + "</li>")
// }
// document.write("</ol>")
// 8--Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// let studentName :string[] = ["Alina" , "Arisha" , "Kainat"];
// let obtainedScore :number[] = [260 , 480 , 300];
// let totalScore : number = 500
// let marksOfFirstStudent = obtainedScore[0]/ totalScore * 100
// let marksOfSecondStudent = obtainedScore[1]/ totalScore * 100
// let marksOfThirdStudent = obtainedScore[2]/ totalScore * 100
// document.write(`<h3>Score of ${studentName[0]} is ${obtainedScore[0]} .Percentage: ${marksOfFirstStudent.toFixed(2)}% </h3>`)
// document.write(`<h3>Score of ${studentName[1]} is ${obtainedScore[1]} .Percentage: ${marksOfSecondStudent.toFixed(2)}% </h3>`)
// document.write(`<h3>Score of ${studentName[2]} is ${obtainedScore[2]} .Percentage: ${marksOfThirdStudent.toFixed(2)}% </h3>`)
// // another Method
// for(let i = 0; i < studentName.length ; i++){
//     let marks = (obtainedScore[i]/totalScore) * 100
//     document.write(`<h3>Score of ${studentName[i]} is ${obtainedScore[i]} .Percentage: ${marks.toFixed(2)}% </h3>`)
// }
// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
var colorsName = ["Red", "Green", "White", "Black", "Purple", "Skyblue"];
// document.write("<h2> Initial Colors: </h2>", colorsName.join(" , ") , "</br>");
// // a. Ask the user what color to add at the beginning
// let beginningColor = prompt("Enter the color name you want to add in the beginning")
// if(beginningColor){
//      colorsName.unshift(beginningColor)    // add color to the begining
//      document.write("<h2> After adding color to the beginning : </h2>", colorsName.join(" , "), "</br>");
// }
// // b. Ask the user what color he/she wants to add to the end
// // & add that color to the end of the array. Display the
// // updated array in your browser.
// let colorAtEnd = prompt("Enter the color you want to add at the end :")
// if(colorAtEnd){
//      colorsName.push(colorAtEnd)
//      document.write("<h2> After adding color at the End : </h2>", colorsName.join(" , "), "</br>");
// }
// // c. Add two more color to the beginning of the array.
// // Display the updated array in your browser.
// colorsName.unshift("Pink" , "Orange");
// document.write("<h2> Updated Colors :</h2>" , colorsName.join(" , ") , "</br>")
// // d. Delete the first color in the array. Display the updated
// // array in your browser.
// colorsName.shift()
// document.write("<h2>Update colors(Deleting the first color) : </h2> " , colorsName.join(" , ") , "</br>");
// // e. Delete the last color in the array. Display the updated
// // array in your browser.
// colorsName.pop();
// document.write("<h2>updated color list(after removing last color) : </h2>" , colorsName.join(" , "), "</br")
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// let userInput = prompt("At which index do you want to add the new color?")
// let newColor = prompt("Enter the color name:")
// if(userInput && newColor && !isNaN(parseInt(userInput))){
//      colorsName.splice(parseInt(userInput) , 0 , newColor)
//      document.write(`Updated Colors (After Adding Color at Index ${userInput}):`, colorsName.join(" , "))
//      document.write("colorsName")
// }
//       // f. Ask the user at which index he/she wants to add a color & color name.
// let indexToAdd = prompt("At which index do you want to add the new color?");
// let newColor = prompt("Enter the color name to add at that index:");
// if (indexToAdd !== null && newColor !== null) {
//     // Convert index to a number
//     let index: number = parseInt(indexToAdd);
//     // Check if the index is a valid number and within bounds
//     if (!isNaN(index) && index >= 0 && index <= colorsName.length) {
//         colorsName.splice(index, 0, newColor); // Add color at the specified index
//         document.write("<h2>After adding color at index " + index + ":</h2>", colorsName.join(" , "), "<br>");
//     } else {
//         document.write("<h2>Invalid index. Please enter a valid index between 0 and " + colorsName.length + ".</h2><br>");
//     }
// }
// // 10. Write a program to store student scores in an array &
// // sort the array in ascending order using Array’s sort
// // method.
// let studentScore : number[] = [320 , 230, 480 , 120]
// studentScore.sort()
// console.log(studentScore)
// // 11. Write a program to initialize an array with city names.
// // Copy 3 array elements from cities array to selectedCities
// // array.
// let cities : string[] = ["Karachi" , "Islamabad" , "Lahore" , "Peshawar" , "Quetta"]
// console.log("Cities:", cities)
// let selectedCities : string[] = cities.slice(0 ,3)
// console.log("SelectedCities :" , selectedCities)
// // 12. Write a program to create a single string from the
// // below mentioned array:
// // var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// // (Use array’s join method)
// let arr : string[] = ["This" , "is" , "My" , "Cat"];
// console.log("Array: " ,arr.join(" , "))
// console.log("String:", arr.join(" "))
// // 13. Create a new array. Store values one by one in such a way
// // that you can access the values in the order in which they
// // were stored. (FIFO-First In First Out)
// let devices : string[] = [];
// // Add values one by one using FIFO order
// devices.push("Keyboard")
// devices.push("Mouse")
// devices.push("Printer")
// devices.push("Monitor") // last in
// // Access values in FIFO order (First In, First Out)
// console.log("Removed :" , devices.shift());
// console.log("Removed :" , devices.shift());
// console.log("Removed :" , devices.shift());
// console.log("Removed :" , devices.shift());
// // At this point, the array should be empty
// console.log("Devices array after removals:", devices);
// // 14. Create a new array. Store values one by one in such a way
// // that you can access the values in reverse order. (Last In-
// // First Out)
// let devices2 : string[] = [];
// // Ad element in the array
// devices2.push("keyboard")
// devices2.push("Mouse")
// devices2.push("printer")
// devices2.push("Monitor")
// console.log(devices2)
// //LILO
// console.log("Removed:", devices2.pop())
// console.log("Removed:", devices2.pop())
// console.log("Removed:", devices2.pop())
// console.log("Removed:", devices2.pop())
// console.log("Decvices after all pops :" , devices2)
// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
var phoneManufacturer = ["Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
// Loop through the array and create an option for each manufacturer
for (var i = 0; i < phoneManufacturer.length; i++) {
    document.write("<option value = '" + phoneManufacturer[i] + " '>" + phoneManufacturer[i] + "<option>");
}
document.write("</select>");
