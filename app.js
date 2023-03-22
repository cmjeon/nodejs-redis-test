const express = require('express')

const app = express()
const redisCtrl = require('./redis')

app.use(express.json())
app.use('/', redisCtrl)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on ${port} port`)
})
