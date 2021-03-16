const express = require("express");
const router = express.Router();

// HTTP Response codes
const HTTP_OK = 200;
const HTTP_CREATED = 201;
const HTTP_NO_CONTENT = 204;

const Products = require("./models/Products");



router.get("/products", async (req,res) => {
  try {
    const products = await Products.find();
    res.status(HTTP_OK).send(products);
  } catch (err) {
    res.send(err);
  }
});

router.get("/products/:id", async (req,res) => {
  const product_id = parseInt(req.params.id);
  try {
    const product = await Products.findOne({ product_id: product_id });
    res.status(HTTP_OK).send(product);
  } catch (err) {
    res.send(err);
  }
});

router.post("/products", async (req,res) => {
  try {
    const product = new Products({
      product_id: req.body.toInsert.product_id,
      name: req.body.toInsert.name,
      type: req.body.toInsert.type,
      price: req.body.toInsert.price,
      rating: req.body.toInsert.rating,
      warranty_years: req.body.toInsert.warranty_years,
      available: req.body.toInsert.available
    });

    await product.save();
    res.status(HTTP_CREATED).send(product);
  } catch (err) {
    res.send(err);
  }
});

router.patch("/products/:id", async (req,res) => {
  const product_id = parseInt(req.params.id);

  try {
    const product = await Products.findOne({ product_id: product_id });

    if (req.body.toInsert.name != "") {
      product.name=req.body.toInsert.name;
    }

    if (req.body.toInsert.type != "") {
      product.type=req.body.toInsert.type;
    }

    if (req.body.toInsert.price != 0) {
      product.price=req.body.toInsert.price;
    }

    if (req.body.toInsert.rating != 0) {
      product.rating=req.body.toInsert.rating;
    }

    if (req.body.toInsert.warranty_years != 0) {
      product.warranty_years=req.body.toInsert.warranty_years;
    }

    product.available=req.body.toInsert.available;

    await product.save();
    res.status(HTTP_OK).send(product);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/products/:id", async (req,res) => {
  const product_id = parseInt(req.params.id);

  try {
    await Products.deleteOne({ product_id: product_id });
    res.status(HTTP_NO_CONTENT).send();
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
