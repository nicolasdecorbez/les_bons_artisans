const express = require('express')
const router = express.Router()

const Products = require('./models/Products')

router.get('/products', async (req,res) => {
  const prods = await Products.find()
  res.status(200).send(prods)
})

router.get('/products/:id', async (req,res) => {
  const p_id = parseInt(req.params.id)
  try {
    const prod = await Products.findOne({ product_id: p_id })
    res.status(200).send(prod)
  } catch {
    res.status(404).send({ error: "Product doesn't exist!" })
  }
})

router.post('/products', async (req,res) => {
  const prod = new Products({
    product_id: req.query.pid,
    name: req.query.name,
    type: req.query.type,
    price: parseFloat(req.query.price),
    rating: parseFloat(req.query.rating),
    warranty_years: parseInt(req.query.warranty_years),
    available: (req.query.available === 'true')
  })

  await prod.save()
  res.status(201).send(prod)
})

router.patch('/products/:id', async (req,res) => {
  const p_id = parseInt(req.params.id)

  try {
    const prod = await Products.findOne({ product_id: p_id })

    if (req.query.name) {
      prod.name = req.query.name
    }

    if (req.query.type) {
      prod.type = req.query.type
    }

    if (req.query.price) {
      prod.price = req.query.price
    }

    if (req.query.rating) {
      prod.rating = req.query.rating
    }

    if (req.query.warranty_years) {
      prod.warranty_years = req.query.warranty_years
    }

    if (req.query.available) {
      prod.available = req.query.available
    }

    await prod.save()
    res.status(200).send(prod)
  } catch {
    res.status(404).send({ error: "Product doesn't exist!" })
  }
})

router.delete('/products/:id', async (req,res) => {
  const p_id = parseInt(req.params.id)

  try {
    await Products.deleteOne({ product_id: p_id })
    res.status(204).send();
  } catch {
    res.status(404).send({ error: "Product doesn't exist!" })
  }
})



module.exports = router
