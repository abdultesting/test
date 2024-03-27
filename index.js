const express = require('express')
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send("Hello From the serve")
})

const port = 8000;
app.listen(port,()=>{
    console.log('Listening to the port 8000');
})