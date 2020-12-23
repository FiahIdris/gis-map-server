const express = require('express')
const app = express()
const port = 3000
const allRouters = require('./routers/index.js')
const errorHandler = require('./middlewares/errorHandlers.js')
const cors = require('cors')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', allRouters)
app.use(errorHandler)

if (port === null || "") {
  port = 3000;
}

app.listen(port, () => {
  console.log(`app running on http://localhost:${ port }`);
})