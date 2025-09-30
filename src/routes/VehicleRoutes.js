const express = require('express')
const router = express.Router()

const vehicleController = require("../controller/VehicleController")

router.get("/", vehicleController.get)
router.post("/", vehicleController.save)
router.get("/delete/:id", vehicleController.delete);
router.get("/editar/:id", vehicleController.editForm);
router.post("/update-vehicle/:id", vehicleController.update); 

module.exports = router