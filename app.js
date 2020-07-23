// Question # 4



// var sub1 = prompt("Enter first subject marks: ");
// var sub2 = prompt("Enter second subject marks: ");
// var sub3 = prompt("Enter third subject marks: ");

// var sum = sub1+sub2+sub3;


// console.log(sum);

// function mainFunction() {

//     var sub1 = +prompt("Enter first subject marks: ");
//     var sub2 = +prompt("Enter second subject marks: ");
//     var sub3 = +prompt("Enter third subject marks: ");


//     function averageFinder(){
//         var total = sub1 + sub2 + sub3;
//     }


//     function percentageFinder(){

//         var percentage = (averageFinder() / 300) * 100;

//     }

//     return "Your marks average is " + averageFinder() + "Your percentage is " + percentageFinder()


// }


// console.log(mainFunction()); 


// Question # 5



// function indexFinder(){
//     var stringVal = prompt("Enter string here... ");
//     var indexLetter = prompt("Write the letter which index you want ");

//     for(var i =0; i<=stringVal.length; i++){
//         if(stringVal[i] === indexLetter){
//             console.log("We find this letter in this index: " + i);
//         }

//     }


// }

// indexFinder();




// var userInput = prompt("Write string here string should not have more than 25 characters...")

// if(userInput.length > 25){
//     for(var i = 0; i<=userInput.length; i++){
//         if(userInput[i] === "a" && userInput[i] === "e" && userInput[i] === "i" && userInput[i] === "o" && userInput[i] === "u"){
//             var updatedUserInput = userInput.splice(userInput[i])
//             console.log(updatedUserInput)
//         }
//     }
// }

// else{
//     console.log("You wrote great ")
// }



// var userInput = prompt("Write string here string should not have more than 25 characters... ");
// var count = 0;



// for(var i = 0; i<=userInput.length; i++){
//     count++;
// }

// if(count > 25){
//     for(var i = 0 ; i<=userInput.length; i++){
//         if(userInput[i] === "a" && userInput[i] === "e" && userInput[i] === "i" &&userInput[i] === "o" &&userInput[i] == "u"){
//             var abc = userInput.splice(userInput[i])
//             console.log(abc)
//         }

//     }    
// }

// else{
//     console.log("No error")
// }



// var string = "that the quick brown fox jumps over the lazy dog";
// var count = 0;

// for(var i=0; i<=string.length; i++){
//     count++
// }

// if(string == 10){
//     string2 = string.toLocaleLowerCase().split("");
//     string3 = string.replace([a,e,i,o,u]," ");
//     newString = string3.join("");    
//     console.log(newString)
// }

// else{
//     console.log('sorry')
// }



// var strings = ["bongo drums", "guitar", 
//   "flute", "double bass", "xylophone","piano"];                          

//    string = strings.replace( ["a","e","i","o","u"], '' );              

//   console.log(string); 


// Question # 7


// var string = prompt("Write string here...");
// var count = 0;
// var vowels = ["a", "e", "i", "o", "u"];

// for (var i = 0; i <= string.length; i++) {
//     for (var i = 0; i <= vowels.length; i++) {
//         if (string[i] === vowels[i]){
//             count++
//         }

//     }
// }

// console.log(count)


// ==========================
//         EVENTTS
//     CHATPTER 49 - 52
// ==========================


// function signupfunc() {
//     var firstName = document.getElementById("first_name").value;
//     var lastName = document.getElementById("last_name").value;
//     var emailAddress = document.getElementById("email_Address").value;
//     var Password = document.getElementById("password").value;
//     document.write("<h1>SIGN UP FORM</h1>")
//     document.write("<b>First Name:</b> " + firstName);
//     document.write("<br><br><b>Last Name: </b>" + lastName);
//     document.write("<br><br><b>Email Address:</b> " + emailAddress);
//     document.write("<br><br><b>Password:</b> " + Password);
// }


// Question # 2

// function detailsDisplayer(){
//     var hideMaterial = document.getElementById("firstUl");
//     var showMaterial = document.getElementById("hiddenMaterial");
    
//     document.getElementById("firstUl").innerHTML = showMaterial;
// }




// ===========================
//         DOM
// ===========================


// Part # 1
// var mainContent = document.getElementById("main-content");

// Part # 2
// console.log(mainContent);

// Part # 3
// var allClass  = document.getElementsByClassName("render");

// console.log (document.getElementsByClassName("render")[0].innerHTML);
// console.log (document.getElementsByClassName("render")[1].innerHTML);
// console.log (document.getElementsByClassName("render")[2].innerHTML);
// console.log (document.getElementsByClassName("render")[3].innerHTML);
// console.log (document.getElementsByClassName("render")[4].innerHTML);


// Part # 4


// var classValue = document.getElementsByClassName("render")[0].innerHTML
// var firstName = document.getElementById("first-name").value = classValue;

// Part # 5

// var classValue = document.getElementsByClassName("render")[1].innerHTML
// var lastName = document.getElementById("last-name").value = classValue;

// var classValue = document.getElementsByClassName("render")[2].innerHTML
// var emailAddress = document.getElementById("email").value = classValue;



// QUESTION # 2

// Part # 1


// var formContent = document.getElementById("form-content")
// console.log(formContent.nodeType)


// Part # 2

// var lastName = document.getElementById("last-name")
// var name2 = lastName.nextSibling
// console.log(lastName.nodeType)
// console.log(name2.nodeType)


// Part # 3

// var lastName = document.getElementById("last-name").value = "last-name: abc";
// console.log(lastName)



// Part # 4


// var mainContent = document.getElementById("main-content")
// console.log(mainContent.firstChild)
// console.log(mainContent.lastChild)


// Part # 5

// var lastName = document.getElementById("last-name");
// console.log(lastName.nextSibling);
// console.log(lastName.previousSibling);



// Part # 6


// var emailAddress = document.getElementById("email")
// console.log(emailAddress.parentNode)
// console.log(emailAddress.nodeType)