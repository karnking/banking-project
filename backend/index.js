const express = require('express');
const { connection } = require('./config/db');
require('dotenv').config()

const app = express();

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("Connected to Db successfully")
    } catch (err) {
        console.log(err)
    }
    console.log('Server started at ',process.env.PORT)
})