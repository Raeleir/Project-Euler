var a = 600851475143;
var explain = 20;

//check if 
var isPrime = function(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}


var highestPrimeFactor = function (num) {
        if (num === 1) return;
        if (isPrime(num)) {
            return num;
        }
        for (i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return highestPrimeFactor(num / i);
            }
        }
}

console.log(highestPrimeFactor(explain));