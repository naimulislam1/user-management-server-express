const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "John", email: "john@example.com" },
  { id: 2, name: "Mohn", email: "john@example.com" },
  { id: 3, name: "Sohn", email: "john@example.com" },
];

app.get("/", (req, res) => {
  res.send("Server is running on port " + port);
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
