const express = require("express");
const router = express.Router();
const { getUsersCredentials, setUSersCredentials } = require("../controllers/controllers");

router.route("/").get(getUsersCredentials);
router.route("/").post(setUSersCredentials)

module.exports = router;