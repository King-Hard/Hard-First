# Promises

- We have 3 state in Promises: Resolve and Reject (Pending)

const promises = new Promise((resolve, reject) =>{
    const i = "Promises"
    i === "Promises" ? resolve() : reject()
})

promises
.then(() => console.log("Promises was resolved"))
.catch(() => console.log("Promises was rejected))


Dito sa promises para syang if, else kung resolve iru-run nya yung laman ng if kung rejected iru-run nya yung laman ng else. 

Ganon lang din sa Promises different structure lang ng code

Need natin ng variable = new Promises((resolve, reject) =>{
    const i = "Promises"
    i === "Promises" ? resolve() : reject()
})

after natin mag condition lalagay lang tayo ng question mark sa tabi non then yung resolve() : reject() natin


yung promises natin parang if and else lang sya ang nadagdag lang is yung format, kumbaga nabago lang yung format: 

Mga nabago:
1, const variable = ((resolve, reject))
2, condition ? resolve() : reject()
3, variable .then(() => do) and .catch(() => do)

const promise = new Promise((resolve, reject) =>{
    i = 5

    if(i > 4) ? resolve("Correct") : reject("Wrong")

promise
    .then(msg = console.log(msg))
    .catch(err => console.log(err))



example: 

const promise = new Promise((resolve, reject) =>{
    i = 5
    i > 3 ? resolve() : reject()
})

promise
    .then(msg => console.log(msg)) 
    .catch(err => console.log(err))

    Yung resolve and reject natin don sa new Promise((resolve, reject) => {}) ka-partner nila is yung then and catch natin yung sa resolve .then sa reject .catch

    Bali don natin gagawin yung mangyayari sa loob ng .resolve and .reject natin sa .then and .catch