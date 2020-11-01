const mongoose = require('mongoose')

const DATABASE_URL = "";

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

mongoose.Promise = global.Promise;

module.exports = mongoose;