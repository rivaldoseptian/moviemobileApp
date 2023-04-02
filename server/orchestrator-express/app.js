const express = require("express");
const app = express();
const router = require("./routes");
const redis = require("./config/redis");
let cors = require("cors");

const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
