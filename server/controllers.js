
let globalID = 4;
const houseDB = require("./db.json")
module.exports = {
    "getHouses": (req, res)=>{
        res.status(200).send(houseDB)
    },
    "deleteHouse": (req, res) =>{

    },
    "createHouse": (req, res) =>{

    },
    "updateHouse": (req, res)=>{

    }

}    
