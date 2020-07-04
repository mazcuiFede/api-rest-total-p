'use strict'

const mongoose = require('mongoose') //To connect database
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
    if(err) {
        console.log(`Error. Something was wrong trying to connect to the database: ${err}`)
    }
    console.log("Successful connection!")
    
    app.listen(config.port, () => {
        console.log(`Api-rest running at port ${config.port}`)
    })
})

