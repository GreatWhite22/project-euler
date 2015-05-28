var Sum = 0;
for (var i = 1; i<1000; i++) {
    if (i % 3 === 0) {
        Sum += i;
    }
    else if (i % 5 === 0) {
        Sum += i;
    }
}
console.log(Sum);