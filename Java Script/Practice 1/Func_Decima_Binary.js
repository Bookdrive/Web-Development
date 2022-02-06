let number=5;

function decimalBinary(number){
    let Binary="";
    while(number)
    {
        Binary=number%2+""+Binary;
        number>>=1;
    }
    return Binary;
}
console.log(decimalBinary(number));