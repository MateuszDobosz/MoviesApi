require('dotenv').config();
const express = require('express')
const cors = require('cors')
const routes = require("./routes/index");
const bodyParser = require('body-parser')
const app = express()
const port = process.env.NODE_PORT

app.use(cors());
app.use(bodyParser.json());
app.use('/',routes);



app.listen(port,  async() => {
  console.log(`App listening at http://localhost:${port}`)
})