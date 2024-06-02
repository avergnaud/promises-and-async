async function main() {
    console.log('waiting for 2s');
    await new Promise((resolve, reject) => { 
        const callbackFunction = () => resolve();
        setTimeout(callbackFunction, 2000);
    });
    console.log('done');
}

main();