# Async and Await

Ginagamit natin to para makabuild tayo ng function tapos kada ipapagawa natin const lang tayo then gagamit tayo ng await.

Example: 

1, async - 
format:

const variable = async() =>{

}

2, await -

fotmat:
const variable = async() =>{
    const variable = await ipapagawa natin
}

Example gamitin natin sya sa pagkuha ng laman nung url natin fetching:

const dataContainer = async() =>{
    const fetching = await fetch(url)
    const repsonse = fetching.json()
    const getData = response
        .filter(data => data.completed === true)
        .map(data => data.name)

    console.log(getData)
}

dataContainer()


Sa variable natin na may async, matic naka function na yung return nya. Ngayon yung await na ka partner ng async natin is yan natin gagamitin sa loob ng variable natin na may await kumbaga derederetsyo to mas malinis code using multiple const tas salin-salin lang na mga variable na ginamit natin.



