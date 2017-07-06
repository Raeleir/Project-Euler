//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

//Find the largest palindrome made from the product of two 3-digit numbers.



var palinProduct = function (digits) {
    var all = [];
    var highest = [];
    var start = Math.pow(10, (digits - 1))
    var end = (Math.pow(10, (digits)) - 1)
    for (i = start; i <= end; i++) {
        for (x = start; x <= end; x++) {
            var product = x * i;
            var prodRev = Number((x * i).toString().split("").reverse().join(""));
            if (product === prodRev) {
                all.push(product);
                all.push(x);
                all.push(i);
            }
        }
    }
    var highProduct = Math.max.apply(Math, all);
    var highNum1 = all[all.indexOf(highProduct) + 1];
    var highNum2 = all[all.indexOf(highProduct) + 2];
    highest.push(highProduct);
    highest.push(highNum1);
    highest.push(highNum2);
    return highest.join(" ");
}

console.log(palinProduct(3));