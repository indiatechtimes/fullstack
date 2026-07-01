
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
            title:"Why don't programmers like nature?",
            content:"Because it has too many bugs."
        },
        {
            id:2,
            title:"Why Java developers wear glasses?",
            content:"Because they don't C#."
        },
        {
            id:3,
            title:"Flutter is awesome.",
            content:"Because everything is a widget."
        },
        {
            id:4,
            title:"Why NodeJS?",
            content:"Because JavaScript everywhere."
        },
        {
            id:5,
            title:"What is API?",
            content:"A waiter between client and database."
        }
    ]
    res.send(jokes);
})



app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});