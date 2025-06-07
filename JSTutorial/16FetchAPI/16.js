fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data =>{
        const filtered = data
            .filter(post => post.userId === 1)
            console.log(`Total posts by user: ${filtered.length}`)

        const format = filtered.map(post => `Posts: ${post.title}`)
            console.log(format)
    })
    

/* fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data =>{
        const newData = data
            .filter(post => post.userId === 1)
            .map(post => Total posts by user: ${post.userId} Posts: ${post.title})

            console.log(newData)
    })

*/


/* fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data =>{
        const newTodo = data
            .filter(todo => todo.completed === true)
            .map(todo => `ToDo number: ${todo.id}, and toDo: ${todo.title}`)

        console.log(newTodo)
    })

*/


/*fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(response => response.json())
    .then(data => {
        const newUrl = data
            .filter(comment => comment.email)
            .map(comment =>`${comment.name} and ${comment.email}`)

    console.log(newUrl)
    })

    .catch(err => console.log(`Error: ${err}`))

*/
