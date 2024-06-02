const processCallbacks = (resolveCallback, rejectCallback) => {
    const someFloat = Math.random();
    if (someFloat > 0.5) {
        resolveCallback(someFloat);
    } else {
        rejectCallback(someFloat);
    }
};

processCallbacks(
    message => console.log(`Calling resolveCallback: ${message}`),
    message => console.log(`Calling rejectCallback: ${message}`)
);

// --> "callback hell"