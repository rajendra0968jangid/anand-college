const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());

app.post('/payment', (req, res)=> {
  console.log(req.body);
  res.status(400).json({name:'asdfsdfsd'})
})
app.post('/payment', (req, res)=> {
  console.log(req.body);
  res.status(400).json({name:'asdfsdfsd'})
})
app.post('/payment', (req, res)=> {
  console.log(req.body);
  res.status(400).json({name:'asdfsdfsd'})
})
app.post('/payment', (req, res)=> {
  console.log(req.body);
  res.status(400).json({name:'asdfsdfsd'})
})

app.listen(3000)
