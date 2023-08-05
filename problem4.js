// একটা ফাংশন লিখো। যেটার ইনপুট প্যারামিটার হিসাবে একটা আয়াতক্ষেত্রের দৈঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্রের area কে রেজাল্ট হিসাবে রিটার্ন করো। 
 
function rectangle(width, height){
    let area = width * height;
    return area;
}

const width = 20;
const height = 12;
const result = rectangle(width, height);
console.log("The area of rectangle is: ", result);