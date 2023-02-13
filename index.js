const express = require("express");
const app = express();
const products = require("./routes/products");
const home = require("./routes/home");

app.use(express.json());

app.use("/api/products", products);
app.use("/", home);

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`listening ${port}`));
