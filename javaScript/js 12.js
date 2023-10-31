//async function

async function greet() {
    return "hello";
}

greet()
    .then((result) => {
        console.log("promise was successful", result);
    })
    .catch((err) => {
        console.log("promise was failure", err);
    });
