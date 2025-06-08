const dataContainer = async() =>{
    const fetching = await fetch('https://jsonplaceholder.typicode.com/todos')
    const response = await fetching.json()
    const collectData = await response
        .filter(data => data.completed === true)
        .map(data => data.title)

    console.log(collectData)
}

dataContainer()



