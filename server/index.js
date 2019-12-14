const express = require('express')
const app = express()

const router = require('./router.js')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')


app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

app.use(router)

router.route('/', router)

app.use(express.static(path.resolve(__dirname, "../client/dist")))

module.exports = app