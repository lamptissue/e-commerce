const express = require("express");
const router = express.Router();

const products = [
  {
    id: 1,
    name: "Poster",
    price: 24,
    description: "this is a very cool prduct",
    image:
      "https://res.cloudinary.com/lamptissue/image/upload/v1659253624/Print_Mock_up_-_Going_somehere_Going_Nowhere_close_up_blue_purple_zzgmpj.jpg",
  },
  {
    id: 2,
    name: "Sticker",
    price: 1,
    description: "this is a very cool sticker",
    iamge:
      "https://res.cloudinary.com/lamptissue/image/upload/v1659474669/i_cycle_faster_than_you_ftr48y.jpg",
  },
  {
    id: 3,
    name: "Lego",
    price: 4,
    description: "this is a very cool lego",
    image:
      "https://res.cloudinary.com/lamptissue/image/upload/v1660052034/bloom_magazine_community_garden_spot_illustrstion_dzpcmx.jpg",
  },
];

// Retrieve a list of all products
router.get("/", (req, res) => {
  res.send(products);
});

// Retrieve a specific product by ID
router.get("/:id", (req, res) => {
  const product = products.find((c) => c.id === parseInt(req.params.id));
  if (!product) {
    res.status(404).send("The product can't be found");
    return;
  }
  res.send(product);
});

// Add a new product to the catalog
router.post("/", (req, res) => {
  const product = {
    id: product.length + 1,
    name: req.body.name, //check length of name
    price: req.body.price, // check to see if its a number with 2 decimal
    description: req.body.description, //check to see if its string and more than 1 word?
  };
});

// Update an existing product
router.put("/:id", (req, res) => {
  const product = products.find((c) => c.id === parseInt(req.params.id));
  if (!product) {
    res.status(404).send("The product can't be found");
    return;
  }
  product.name = req.body.name;
  product.price = req.body.price;
  product.description = req.body.description;
  res.send(product);
});

// Remove a product from the catalog
router.delete("/:id", (res, req) => {
  const product = products.find((c) => c.id);
});

module.exports = router;
