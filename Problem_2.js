var Num1 = 1;
var Num2 = 1;
var SaveNum1 = 0;
var Sum = 0;


while (Num1<4000000) {
    SaveNum1 = Num1;
    Num1 += Num2;
    Num2 = SaveNum1;
    if (Num1 % 2 === 0) {
        Sum += Num1;
    }
}

console.log(Sum);