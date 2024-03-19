const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.get("/", (req, res) => {
  res.send("Node server is running!");
});

app.listen(8080, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
