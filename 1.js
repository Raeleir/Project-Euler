//for 0-1000, sum those divisible by 3 OR 5
var total = 0;
for(i=0;i<1000;i++){
    if(i % 3 === 0 || i % 5 === 0){
        total += i;
    }
}

console.log(total);