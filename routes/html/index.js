const router = require("express").Router();
const htmlRoutes = require("./htmlRoutes");

// tell the express Router use htmlRoutes to be a homebase
router.use("/", htmlRoutes);

module.exports = router;