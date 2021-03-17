// Mise en place du framework express
const express = require("express");
// Mise en place de Mongoose (MongoDB)
const mongoose = require("mongoose");
// Importation de nos routes
const routes = require("./routes");
// Mise en place des headers
const cors = require("cors");

const dbName = "lba-db";
const DATABASE_URL = process.env["DATABASE_URL"] || "mongodb://localhost:27017/" + dbName;

// Connexion à MongoDB
mongoose
  .connect(DATABASE_URL, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
  .then(() => {
      const app = express();

      app.use(cors());
      app.options('*', cors());

      app.use(express.json());
      app.use("/api", routes);

      app.listen(8080, () => {
        console.log("Server ok!");
      });
  });
