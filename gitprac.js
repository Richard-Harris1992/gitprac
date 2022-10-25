//fxn 1 log 1 - 20
const logNumbers = () => {
    for(let i = 1; i <= 20; i++) {
        console.log(i);
    }
}
logNumbers();

//fxn 2 Get Even
const getEven = () => {
    for(let i = 1; i <= 200; i++) {
        if(i % 2 === 0) {
            console.log(i);
        }
    }
}
getEven();

//fxn fizzbuzz
const fizz = () => {
    for(let i = 1; i <= 100; i++) {
        if(i % 5 == 0 && i % 3 == 0) {
            console.log('FizzBuzz');
        } else if(i % 5 == 0) {
            console.log("Buzz");
        } else if( i % 3 == 0) {
            console.log('Fizz');
        } else {
            console.log(i);
        }
    }
}
fizz();