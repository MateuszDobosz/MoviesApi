require('dotenv').config();
const express = require('express')
const routes = require("./routes/index");
const bodyParser = require('body-parser')
const app = express()
const port = 5000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(bodyParser.json());
app.use('/',routes);



app.listen(port,  async() => {
  console.log(`Example app listening at http://localhost:${port}`)
})