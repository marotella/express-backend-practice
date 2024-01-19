
let globalID = 4;
const houseDB = require("./db.json")
module.exports = {
    "getHouses": (req, res)=>{
        res.status(200).send(houseDB)
    },
    "deleteHouse": (req, res) =>{
        const {id} = req.params;
        const index = houseDB.findIndex(element => +element.id === +id)
        houseDB.splice(index, 1);
        res.status(200).send(houseDB)
    },
    "createHouse": (req, res) =>{

    },
    "updateHouse": (req, res)=>{

    }

}    
