const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()
const helmet = require('helmet')


const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: {error: "Too many requests, try again in 10 minutes"}
}); 

app.use(express.static('public'))
app.use(apiLimiter);
app.use(cors())
app.use(express.json())
app.use(routes)
app.use(helmet())

app.listen(80)

