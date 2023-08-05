function secondLargestNumber(numbers){
    numbers.sort(function(a, b){
        return b - a;  // short in descending order
    });
    return numbers[1];  // return the second element
}

let numbers = [2, 5, 3, 5, 6, 4, 38, 30];
let result = secondLargestNumber(numbers);
console.log("The second largest number is: ",result);