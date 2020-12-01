const functions = require('firebase-functions');
const express = require('express')

const app = express()



app.get('/', (req, res) =>{
    return res.status(200).json({msj: 'Hello World'})
})

app.use(require('./routes/products.routes'))

exports.app = functions.https.onRequest(app)

