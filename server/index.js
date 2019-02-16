const express = require('express')
const ctrl = require('./controller')
const massive = require('massive')
require('dotenv').config()

const app = express()
app.use(express.json())

const {CONNECTION_STRING}= process.env

massive(CONNECTION_STRING).then((dbInstance) => {
  app.set('db', dbInstance)
}).catch((err) => {
  console.log(err)
})




//Endpoints

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.postProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)




//>Endpoints

const port = 4000
app.listen(port, console.log('4000 is running Red Leader'))

