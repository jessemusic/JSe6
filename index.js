// Promise
const doSomeThingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {

        //did something
        resolve('First data');
    }, 1000);
});
const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        //did Other something
        resolve('Second data');
    }, 1000);
});
//console.log(doSomeThingPromise);
doSomeThingPromise
    .then(data => doOtherThingPromise)
    .then(data2 => console.log(data2))
    .catch()



// Callbacks
function doSomeThing(callback) {
    setTimeout(function() {
        //did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        //did othersomething
        callback('Second data');
    }, 1000);
}

function doAll() {
    try {
        doSomeThing(function(data) {
            var processedData = data.split('');

            try {
                doOtherThing(function(data2) {
                    var processedData2 = data2.split('');
                    try {
                        setTimeout(function() {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch (err) {
                        //handle moreInside
                    }
                });
            } catch (err) {
                // handle error inside
            }
        });
    } catch (err) {
        // handle error
    }
}
doAll();