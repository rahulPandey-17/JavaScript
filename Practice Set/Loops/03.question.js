// program to find mean of five numbers

const mean = (nums) => {
    const len = nums.length;
    let sum = 0;
    for (let i = 0 ; i < len ; i++) {
        sum += nums[i];
    }
    return (sum / len);
}

nums = [12, 45, 78, 44, 89];
console.log("Mean of the numbers in the array is " + mean(nums));