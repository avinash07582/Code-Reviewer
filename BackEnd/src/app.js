const express = require('express');
const app = express();
const aiRoutes = require("./routes/ai.routes")
app.use(express.json());
const cors = require('cors')
app.use(cors());
app.get('/', function(req, res){
    res.send('Hello, World!');
})
app.use('/ai',aiRoutes)

module.exports = app