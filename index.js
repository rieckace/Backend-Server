require('dotenv').config()
const express = require('express')

const port = 4000
const app = express()


// Making a request 
app.get('/',(req,res)=>{
    res.send("Hello Rikesh");
})

// Making a request 
app.get('/rike', (req,res)=>{
    res.send("Good Morning!❤️❤️");
})

// using the html tags for the response inside as message
 app.get('/login',(req,res)=>{
     res.send('<h1> Login Page</h1>');
})

      
// Listening tyo the request through the get method on the given port
app.listen(process.env.PORT ,()=>{
console.log(`Server is running on port ${port}`);
})

