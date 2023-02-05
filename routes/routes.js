const express = require("express");
const router = express.Router();
const { getUsersSignUps, setUSersSignUps, setVerifiedUsers, deleteVerifiedUserData } = require("../controllers/controllers");

router.route("/").get(getUsersSignUps);
router.route("/").post(setUSersSignUps);
router.route("/:id").delete(deleteVerifiedUserData);
router.route("/verified").post(setVerifiedUsers);


module.exports = router;