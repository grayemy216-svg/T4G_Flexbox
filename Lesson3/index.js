//let name = "winnie";
//console.log(name);
//let age = 25;
//console.log(age);
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(sum);
let difference = num1 - num2;
console.log(difference);
console.log("num1 * num2:");
console.log(num1 * num2);
console.log("num1 / num2:");
console.log(num1 / num2);
console.log("num1 % num2:");
console.log(num1 % num2);
let x = true;
let y = false;
console.log(x && y);
let z = 11;
console.log(typeof z);
let a ="winnie";
console.log(typeof a);
//prompt the user to enter a number
//check if the number is even or odd
//display that the number the user used is even or odd
let number = prompt("Enter a number")
if(number % 2 == 0){
alert(`${number} is even`)
console.log(`${number} is even`)
} else{
    alert(`${number} is odd`)
    console.log(`${number} is odd`)
}
// let name = prompt("Enter a name")
// let age = prompt("Enter an age ")
// if(age >= 18){
    // alert(`Hi ${name} you ${age} you can signin to tiktok.`)
    // console.log(`Hi ${name} you ${age} you can signin to tiktok.`)

// } else{
    // alert(`Hi ${name} if you are ${age} you cannot sign into tiktok `)
    // console.log(`${age} if you are ${age} you cannot sign into tiktok `)
// }

let name = prompt("Enter a name")
let age = prompt("Enter an age ")
let email = prompt("Enter an email");
if(age <= 12){
    alert(`Hi ${name} you ${age} years old you are too young to register.Sorry😒😒`)
    console.log(`Hi ${name} you ${age} years old you are too young to register.Sorry😒😒`)

} else if(age >12 && age < 18){
    alert(`Hi ${name} You are ${age} years old and you have limited options to register for tiktok`)
    console.log(`${age} You are ${age} years old and you have limited options to register for tiktok`)
}else if(age > 18){
        alert(`Hi ${name} You are ${age} years old and you can register for any option of your choice. We will keep in touch with you viaemail ${email}`)
        console.log(`${age} You are ${age} years old and you can register for any option of your choice. We will keep in touch with you viaemail ${email}`)
}else{
    alert(`Hi ${name} you ${age} years old and you must be 12 or older to register.Sorry😒😒`)
    console.log(`Hi ${name} you ${age} years old you must be 12 or older to register.Sorry😒😒`)
};


function makeMilo() {
     alert("Making Milo...")
    console.log("Making Milo...")
}

makeMilo(); // calling the function to execute the code inside the function




function checkinggender() { //creating the function gender
let gender = prompt("Enter your gender (male/female):"); //
console.log(gender);
gender = gender.toLowerCase(); // converting the input to lowercase to make it case-insensitive
gender = gender.split().join 
//Taking and input from the user(whetther male or female)
//and store their input in a variable called gender
if(gender === "male"){ //checking if the input is male 
    alert("You are a male");
}else if(gender === "female"){ //checking if the input is   
    alert("You are a female ");
}
else{
    alert("You are not a male or female or have inputted an invalid gender " );                                         

}
}
checkinggender(); // calling the function to execute the code inside the function