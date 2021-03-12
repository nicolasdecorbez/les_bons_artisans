// Mise en place du framework express
const express = require('express')

// Mise en place de Mongoose (MongoDB)
const mongoose = require('mongoose')
const dbName = 'lba-db'
const url = 'mongodb://localhost:27017/' + dbName

// Importation de nos routes
const routes = require('./routes')

// Connexion à MongoDB
mongoose
  .connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
  .then(() => {
      const app = express()

      app.use(express.json())
      app.use("/api", routes)

      app.listen(8080, () => {
        console.log("Server ok!");
      })
  })
