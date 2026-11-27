// let name = prompt("enter your name");
// let fullName = "";
// for(let i = name.length -1; i >= 0; i--){
//     // console.log(name[i])
//     fullName += name[i];
    
// }
// console.log(fullName)
              //  6
// let name = "minahil";
              //7 -1

// console.log(name[2])

// let schol = "SIT";

// schol += " saylani"

// console.log(schol)

// let name = prompt("enter your name");
// let fullName = "";
// for(let i = 0; i < name.length; i++){
//     // console.log(name[i])
//     fullName += name[i]
// }
// console.log(fullName)


//  let word = prompt("enter your palindrome word here"); //minahil mom
// let reverse = "";
// for(let i = word.length -1; i >= 0; i--){
//     // console.log(name[i])
//     reverse += word[i];
    
// }

// if (word === reverse) {
//     console.log("IT's palindrome word")
// }else{
//     console.log("It's not palindrome word")
// }


// for(let i = 0; i <= 5; i++){
    
//     for(let j = 1; j <= 5; j++){
//         console.log(i ,j);
//     }
// }

let fullName = prompt("enter full name");
let word = fullName.split(" ")
// console.log(word)
//minahil irfan shaikh ["minahil", "irfan", "shaikh"]
let result;

for(let i = 0; i < word.length; i++){
    result = word[i][0].toUpperCase() + word[i].slice(1);
   console.log(result)
}
let finalWord = result.join(" ");
console.log(finalWord)

