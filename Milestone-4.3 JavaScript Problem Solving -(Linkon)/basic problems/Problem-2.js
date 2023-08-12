/*

ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে 
*/

// Building function 

// function isJavaScriptFile(fileName){
//     if(typeof fileName !=="string"){
//         return "Please provide me a string"
//     }
//     else{
//         // if(fileName.toLowerCase().endsWith(".js")=== true){
//         //     return true;
//         // }
//         // else{
//         //     return false;
//         // }
//         return fileName.toLowerCase().endsWith(".js"); //   true || false
//     }

// }

// Another method function

function isJavaScriptFile(fileName){
    if(typeof fileName !=="string"){
        return "Please provide me a string"
    }
    else{
        // hello.world.bd.js
        const arr = fileName.split(".");
        const lastElement = arr.pop()

        return lastElement.toLowerCase() === "js";
        // if(lastElement.toLowerCase() === "js"){
        //     return true;
        // }else{
        //     return false;
        // }
    }

}
console.log(isJavaScriptFile("index.Js"));