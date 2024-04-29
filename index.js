const express = require("express");
const cors = require("cors");
const CurrentRoutes = require("./src/routes/Current.Routes");
const Schedule = require("./src/middleware/Schedule");

Schedule.IniciaRotinas();

const server = express();
server.use(express.json());
server.use(cors());
server.use("/current", CurrentRoutes);

server.get("/", (req, res) => {
  res.send({ msg: "Online" });
});

server.listen(4000, () => {
  console.log("Servidor iniciado na porta: 4000!");
});
