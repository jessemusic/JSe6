// Promise
const doSomeThingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function() {

        //did something
        resolve('First data');
    }, 1000);
});
const doOtherThingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function() {
        //did Other something
        resolve('Second data');
    }, 1000);
});
//console.log(doSomeThingPromise);
doSomeThingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error));

//Pending
//Fulfilled
//Rejected