const express = require('express')
const app = express()
const port = 3000
const router = require('./router.js')
var httpProxy = require('http-proxy');

const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
var serverOne = 'http://localhost:3000'
app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

var apiProxy = httpProxy.createProxyServer();

// app.use('/',router)
app.all("/app1", function(req,res) {
  apiProxy.web(req,res, {target:serverOne})
})

app.use(express.static("/Users/ariakesh/Product-Review/client/dist"))

module.exports = app