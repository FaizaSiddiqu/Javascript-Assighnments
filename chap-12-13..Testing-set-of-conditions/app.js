// 'A' ka ASCII code 65 hai.
// 'B' ka ASCII code 66 hai.
// 'a' ka ASCII code 97 hai.
// '0' ka ASCII code 48 hai.

// 1 -- Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

let  inputChar = "B";
let ascii = inputChar.charCodeAt(0);

if(ascii >= 48 && ascii <= 57){
    console.log(`${inputChar} is a number`);
}else if(ascii >= 65 && ascii <= 90){
    console.log(`${inputChar} is an Uppercase letter`);
}else if(ascii >= 97 && ascii <= 122){
    console.log(`${inputChar} is a lowercase letter`)
}else{
    console.log(`${inputChar} is neither a number nor a letter`)
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

let num1 = 20;
let num2 = 30;

if(num1 > num2){
    console.log(`${num1} is larger than ${num2}`)

}else if(num1 < num2){
    console.log(`${num2} is larger than ${num1}`)
}
else{
    console.log("Both numbers are equall")
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

let userInput = +prompt("Enter Your Number");

if(userInput > 0){
    alert(`${userInput} is Positive Number`)
}else if(userInput < 0){
    alert(`${userInput} is Negative Number`)
}else{
    alert("The Number is Zero")
}

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

let userInput2 = prompt("Enter your letter:");

if(["a","e","i","o","u"].includes(userInput2)){
    alert("True,it is a vowel")
}else{
    alert("False,it is not an vowel letters")
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// make a variable for the correct password
let password = "mypassword12345";
// ask the user to enter thier passward
let userpassword = prompt("Enter your passowrd")
//validate the two password
if(!userpassword){
    //i. Check if user has entered password. If not
    alert("Please enter your password")
}
else if(userpassword === password){
    // ii. Check if both passwords are same
        alert("Correct!. The password you entered matches the original password")
    }else{
        alert("Incorrect Password")
    }


// 6. This if/else statement does not work. Try to fix it:
// fixed statement
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
}else{
   greeting = "Good evening";
}

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

let time = +prompt("Enter time in 24 hours format");

//if time is between 00:00 and 11:59
if(time >= 0 && time < 1200){
    if(time === 0){
        alert("12AM (MidNight)")  // special case for midnight
    }
    else{
        alert(`${time/100} AM`)   // convert time to AM format
    }
}else if(time >= 1200 && time < 1300){      //if time is betwwn 12:00 and 12:59(Noon)
    alert("12 PM (Noon)")     //specialb case for noon

}else if(time >= 1300 && time <= 2359){    // if time is between 13:00 and 23:59
    alert(`${(time-1200) / 100} PM`)   // convert tim eto PM format

}else{
    alert("Invalid Time! Please Enter a valid time between 0000 to 2359")
}
