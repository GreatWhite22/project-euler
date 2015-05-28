var prime = 0;
var x = 79;
var smallInteger = 2;

while (x>1) {
    if(x % smallInteger === 0) {
        x /= smallInteger;
        prime = smallInteger;
        smallInteger = 2;
    }
    else {
        smallInteger++;
    }
}

console.log(prime);