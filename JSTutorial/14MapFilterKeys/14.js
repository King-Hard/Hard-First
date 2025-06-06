let students = [
    {
        id: 1,
        f_name: "Alex",
        l_name: "B",
        gender: "M",
        married: false,
        age: 22,
        paid: 250,
        course: ["Javascript", "React"]
    },
    {
        id: 2,
        f_name: "Abraham",
        l_name: "M",
        gender: "M",
        married: true,
        age: 32,
        paid: 150,
        course: ["Javascript", "PWA"]
    },
    {
        id: 3,
        f_name: "Rubi",
        l_name: "S",
        gender: "F",
        married: false,
        age: 27,
        paid: 350,
        course: ["Blogging", "React", "UX"]
    },
];


const newStudent = students.map((student) =>{
    return student
})

console.log(newStudent)



