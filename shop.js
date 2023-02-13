const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello pretty boy");
});

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`listening ${port}`));
