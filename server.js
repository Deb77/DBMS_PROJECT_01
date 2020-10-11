const express = require("express");
const cors = require('cors');
const app = express();

const PORT = 5000;

app.use(express.json());
app.use(cors());

const sailorRoutes = require('./routes/sailors');
app.use('/sailors',sailorRoutes);

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
