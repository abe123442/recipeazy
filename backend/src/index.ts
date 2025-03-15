import express from "express";

const app = express();
const PORT = 3000;

app.get("/beep", (req, res) => {
  res.json({ message: "boop" });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
