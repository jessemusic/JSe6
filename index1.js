// ES7 - Async / Await
const simpleFunc = async() => {
    throw new Error('On no!');
    return 12345;
};
simpleFunc().then(data => {
    console.log(data);

}).catch(err => {
    console.log(err);
});