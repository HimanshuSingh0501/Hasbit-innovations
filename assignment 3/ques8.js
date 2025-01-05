function repeatedSumOfDigits(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
}

// Example usage:
let number = 456;
console.log(repeatedSumOfDigits(number)); 