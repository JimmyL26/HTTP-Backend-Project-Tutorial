const express = require('express');
const app = express();
app.get('/', (req,res) => {
    res.send('Hello there');
});

const courses = [
    {id: 1, name:'Web Development'},
    {id:2, name: 'IT'},
    {id:3, name: 'Cybersecurity'},
];

// http GET requests route
app.get('/api/courses', (req, res) => {
    res.send(courses);
});
//request course by id
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("The course with the given ID was not found");
        return
    }
    res.send(course);
})
app.listen(3000, () => {
    console.log('Listening on port 3000 ...')
})

// localhost:3000 - Hello there
// localhost:3000/api/courses - [{"id":1,"name":"Web Development"},{"id":2,"name":"IT"},{"id":3,"name":"Cybersecurity"}]
// localhost:3000/api/courses/1 -  {"id":1,"name":"Web Development"}
// localhost:3000/api/courses/2 - {"id":2,"name":"IT"}
// localhost:3000/api/courses/3 - {"id":3,"name":"Cybersecurity"}
// localhost:3000/api/courses/4 - The course with the given ID was not found
