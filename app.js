const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.get('/happybirthday', (req, res) =>{
    const {name, age} = req.query
    res.send(`
        <h1> Happy Birthday,<br/>
        ${String(name).toUpperCase()}! </h1>
        <p> you are ${age} years old now. </p>
        <img src="https://media.giphy.com/media/SRO0ZwmImic0/giphy.gif" alt="cat">

    `)
})

app.listen(3333, () =>{
    console.log('server it running')
})