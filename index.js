// Promise
const doSomeThingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function() {

        //did something
        resolve('First data');
    }, 1500);
});
const doOtherThingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function() {
        //did Other something
        resolve('Second data');
    }, 1000);
});


Promise.race([doSomeThingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
});