//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var scm = function (min, max) {
    var input = [min, max];
    var output = 0;
    var multi = input[1];
    while (output === 0) {
        for (i = input[0]; i <= input[1]; i++) {
            if (multi % i !== 0) {
                break;
            }
            if (i === input[1]) {
                output = multi;
            }
        }
        multi += output[1];
    }
    return output;
}

console.log(scm(2, 3));
