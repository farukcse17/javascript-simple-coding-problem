// একটা কোড লেখ যেটা দিয়ে তিনটি সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে। 

function findSmallestNumber(num1, num2, num3){
    // if(num1 < num2){
    //     if(num1 < num3){
    //         return num1;
    //     }
    //     else{
    //         return num3;
    //     }
    // }
    // else{
    //     return num2;
    // }

    if(num1 < num2 && num1 < num3){
        return num1;
    }
    else if(num2 < num1 && num2 < num3){
        return num2;
    }
    else{
        return num3;
    }
}

let num1, num2, num3;
num1 = 34;
num2 = 12; 
num3 = 76;
let result = findSmallestNumber(num1, num2, num3);
console.log("The smallest number is: ",result);