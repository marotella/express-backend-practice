const express =require("express");
const cors = require("cors");
const ctrl = require("./controllers")
const app = express ()

app.use(express.json());
app.use(cors());

app.get("/api/getAll", ctrl.getHouses)
app.post("/api/newHouse", ctrl.createHouse)
app.put("/api/updateHouse/:id", ctrl.updateHouse)
app.delete("/api/deleteHouse/:id", ctrl.deleteHouse)

app.listen(4000, () => console.log("Server running on port 4000"))