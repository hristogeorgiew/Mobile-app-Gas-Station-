const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

//connect to database
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('our db is connected');
}).catch(err => console.log(err.message));

const app = express();

app.get('/', (req, res) => {
    return res.send("<h1>zzzzz</h1>") 
})


app.listen(5000, () => {
    console.log('Server listening on port 5000');
})