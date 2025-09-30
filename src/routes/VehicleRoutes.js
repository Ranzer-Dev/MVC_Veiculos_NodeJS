const express = require('express')
const router = express.Router()

const vehicleController = require("../controller/VehicleController")

router.get("/", vehicleController.get)
router.post("/", vehicleController.save)
router.get("/delete/:id", vehicleController.delete);

module.exports = router