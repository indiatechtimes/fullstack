
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;



app.get('/', (req, res) => {
  res.send('Welcome to our server!');
});

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'first Joke',
            content:'This is first joke'
        },
        {
            id:2,
            title:'second joke',
            content:'this is second joke'
        },
        {
            id:3,
            title:'third joke',
            content:'this is third joke'
        },
        {
            id:4,
            title:'fourth joke',
            content:'this is fourth joke'
        },
        {
            id:5,
            title:'fifth joke',
            content:'this is fifth joke'
        }
    ]
    res.send(jokes);
})



app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});