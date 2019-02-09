const router = require("express").Router();
const burgersController = require("../../controllers/burgers_controller");

// define API routes

// when user hits /api/Burgers
router
  .route("/")
  .get(burgersController.findAll)
  .post(burgersController.createBurger);


// when user hits /api/Burgers/:id
router
  .route("/:id")
  .get(burgersController.findById)
  .put(burgersController.updateBurger)
  
module.exports = router;
