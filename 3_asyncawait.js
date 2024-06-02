//const returningAPromise = () => {
function returningAPromise() {
    return new Promise((resolve, reject) => {
        const someFloat = Math.random();
        if (someFloat > 0.5) {
            resolve(someFloat);
        } else {
            reject(someFloat);
        }
    })
};

/*
The await keyword is placed before the call to a function or variable that returns a promise.
await is only valid in async functions and the top level bodies of modules
*/
//const main = async () => {
async function main() {
    let response = "initial value";
    try {
        response = await returningAPromise();
    } catch (error) {
        console.error(`error: ${error}`);
    }
    console.log(`response: ${response}`)
}

main()
