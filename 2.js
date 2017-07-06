//create an array containing the fibo #'s up to 4 million
var fib = [1, 2];

for(i=2;i < 32; i++){
  var fibNum = fib[i - 2] + fib[i - 1];
  if(fibNum <= 4000000){
      fib.push(fibNum);
  };
};

console.log(fib);
console.log(fib.length);


//create a variable that contains the total of all even numbers in the array
var total = 0;

for(i=0;i<fib.length;i++){
  if(fib[i] % 2 === 0){
    total += fib[i];
    console.log(fib[i]);
  };
};

console.log(total);