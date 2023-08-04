// let numbers = [3, 5, 2, 6, 7, 29, 20, 1];
// let minNumber = Math.max(3, 5, 2, 6, 7, 29, 20, 1);
// console.log(minNumber);

// Qst: write a code. find out min num from an array

function minNumber(numbers){
    let minNumbers = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element < minNumbers){
            minNumbers = element;
        }
    }
    return minNumbers;
}

const numbers = [4, 5, 6, 2, 3, 9, 23, 48, 50, 22];
const result = minNumber(numbers);
console.log(result);

