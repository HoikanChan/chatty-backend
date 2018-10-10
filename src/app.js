const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const config = require('./config/config')
const {
  mongoose
} = require('./models')
mongoose.connect(config.db.path)

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

require('./passport')
require('./routes')(app)

const server = app.listen(config.port)
require('./socket')(server)

process.on('SIGUSR2', () => { process.exit(0); });
console.log('Server started on port' + config.port)
