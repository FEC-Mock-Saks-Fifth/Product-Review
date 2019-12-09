const express = require('express')
const app = express()
const port = 3000
const router = require('./router.js')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api',router)
app.use(express.static(path.join(__dirname, '../client/dist')))
app.listen(port, () => console.log(`HIS POWER LEVELS ARE OVER ${port}000000000!`))