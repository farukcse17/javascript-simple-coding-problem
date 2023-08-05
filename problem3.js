/* একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসাবে একটা Array নিবে। সেই Array এর মধ্যে অনেকগুলো সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলো সংখ্যা আছে। সেই সংখ্যা গুলোর গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ণ হিসাবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।  */

function avgNumber(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        sum += element;
    }
    let avgValue = sum / numbers.length;
    return avgValue.toFixed(2);
}

let numbers = [23, 43, 55, 23, 12, 23];
const result = avgNumber(numbers);
console.log("The average value of array number is: ",result);