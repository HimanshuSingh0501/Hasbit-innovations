function sumOfProducts(n1, n2) {
    
    while (n1.length < n2.length) {
        n1 = '0' + n1;
    }
    while (n2.length < n1.length) {
        n2 = '0' + n2;
    }
    let sum = 0;
    for (let i = 0; i < n1.length; i++) {
        sum += parseInt(n1[i]) * parseInt(n2[i]);
    }
    return sum;
}

// Example usage:
let n1 = prompt("enter number 1 :");     
let n2 = prompt("enter number 2 :");
console.log(sumOfProducts(n1, n2)); 