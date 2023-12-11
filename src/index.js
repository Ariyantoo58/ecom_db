require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const app = express();
app.use(express.json());

const bookRouter = require("./routes/book");

app.use("/api/v1/books", bookRouter);

app.listen(PORT, () => {
  console.log(`server Running on PORT:${PORT}`);
});
