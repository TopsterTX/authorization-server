import express from "express";

const PORT = 90;

const app = express();

app.use("/", (req, res) => {
  res.status(200).json({ message: "All is good" });
});
app.listen(PORT, () => {
  console.log(`Server is started on the ${PORT} port`);
});
