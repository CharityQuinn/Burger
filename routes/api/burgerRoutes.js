const router = require("express").Router();
const burgersController = require("../../controllers/burgers_controller");

// define API routes

// when user hits /api/Burgers
router
  .route("/")
  .get(burgersController.selectAll)
  .post(burgersController.insertOne)



// when user hits /api/Burgers/:id
router
  .route("/:id")
  .put(burgersController.updateOne)

module.exports = router;