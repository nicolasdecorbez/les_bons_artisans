const express = require("express");
const cors = require("cors");
const router = express.Router();

const Products = require("./models/Products");

var corsOptions = {
  origin: "*",
  methods: "GET,PATCH,POST,DELETE"
};

router.get("/products", cors(corsOptions), async (req,res) => {
  const products = await Products.find();
  res.status(200).send(products);
});

router.get("/products/:id", cors(corsOptions), async (req,res) => {
  const product_id = parseInt(req.params.id);
  try {
    const product = await Products.findOne({ product_id: product_id });
    res.status(200).send(product);
  } catch {
    res.status(404).send({ error: "Product doesn't exist!" });
  }
});

router.post("/products", cors(corsOptions), async (req,res) => {
  const product = new Products({
    product_id: req.query.pid,
    name: req.query.name,
    type: req.query.type,
    price: parseFloat(req.query.price),
    rating: parseFloat(req.query.rating),
    warranty_years: parseInt(req.query.warranty_years),
    available: (req.query.available === "true")
  });

  await product.save();
  res.status(201).send(product);
});

router.patch("/products/:id", cors(corsOptions), async (req,res) => {
  const product_id = parseInt(req.params.id);

  try {
    const product = await Products.findOne({ product_id: product_id });

    if (req.query.name) {
      product.name = req.query.name;
    }

    if (req.query.type) {
      product.type = req.query.type;
    }

    if (req.query.price) {
      product.price = req.query.price;
    }

    if (req.query.rating) {
      product.rating = req.query.rating;
    }

    if (req.query.warranty_years) {
      product.warranty_years = req.query.warranty_years;
    }

    if (req.query.available) {
      product.available = req.query.available;
    }

    await product.save();
    res.status(200).send(product);
  } catch {
    res.status(404).send({ error: "Product doesn't exist!" });
  }
});

router.delete("/products/:id", cors(corsOptions), async (req,res) => {
  const product_id = parseInt(req.params.id);

  try {
    await Products.deleteOne({ product_id: product_id });
    res.status(204).send();
  } catch {
    res.status(404).send({ error: "Product doesn't exist!" });
  }
});



module.exports = router;
