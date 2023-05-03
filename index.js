const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors())

const ourChef = require('./data/ourchef.json');
// const chef = require('./data/ourchef.json');

app.get('/', (req, res) => {
  res.send('Cookiteer Food Recipe Server')
})

app.get('/our-chef', (req,res)=>{
   res.send(ourChef)
})

// app.get('/chef-details', (req, res)=>{
//    res.send(chef)
// })

app.get('/our-chef/:id', (req, res)=>{
   const id =  req.params.id
   const selectedChef = ourChef.find(item=>item.id == id);
   res.send(selectedChef)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})