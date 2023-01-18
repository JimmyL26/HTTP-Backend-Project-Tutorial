const express = require('express');
const app = express();
app.use(express.json());
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

app.post('/api/courses', (req,res) => {
    // you write the if code here
    //add an if statement so that the name of the course you post is .min(3) characters 
    if (req.body.name.length > 3) {
        const course ={
            //we assign an ID and a name property
            id: courses.length +1,
            name:req.body.name
        };
        //YOU WRITE THE NEXT LINES OF code
        //next step: push it to the array
        //next step: the server should return the new resource to the client in the body of the response 
        courses.push(course);
        res.send(course);
    }
    else {
        res.status(404).send("A name is required and should be greater than 3 characters long");
    }  
});

app.put('/api/courses/:id', (req,res)=>{

});

app.delete('/api/courses/:id', (req,res)=>{
    //code the following logic
    //look up the course by id
        //return 404 if does not exist
        //delete the course by index HINT: use the indexOf() and splice() methods
        // return the response to the client the course that was deleted
});

    
    