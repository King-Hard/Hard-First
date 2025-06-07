let promise = new Promise((resolve, reject) => {
    const i = "Promise"
    i === "Promise" ? resolve() : reject()
})

promise
.then(() => console.log("Promise was Resolve"))
.catch(() => console.log("Promise was Reject"))

const promises = new Promise((resolve, reject) =>{
    i = 5

    i > 3 ? resolve("Correct") : reject("Wrong")
})

promises
.then(msg => console.log(msg))
.catch(err => console.log(err))