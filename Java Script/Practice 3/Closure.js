function outerFunction() {
    let numberCalled = 1;
    return function innerFunction() {
        if (numberCalled == 1) {
            console.log("I am Called For The First Time!");
        }
        else {
            console.log("Repeated Calls. Heavy Load On System")
        }
        numberCalled++;
    }
}
const func = outerFunction();

func();
func();
func();
func();
func();

const func1 = outerFunction();

func1();
func1();
func1();
console.log()
func();