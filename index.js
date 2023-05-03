const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors())



app.get('/our-chef', (req,res)=>{
   res.send(ourChef)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})