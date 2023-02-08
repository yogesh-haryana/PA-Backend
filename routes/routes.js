const express = require("express");

const router = express.Router();
const {
  getUsersSignUps, setUSersSignUps, setVerifiedUsers, deleteVerifiedUserData, getUsersForLogin,
} = require("../controllers/controllers");

router.route("/").get(getUsersSignUps);
router.route("/").post(setUSersSignUps);
router.route("/:id").delete(deleteVerifiedUserData);
router.route("/verified").post(setVerifiedUsers);
router.route("/verified").get(getUsersForLogin);

module.exports = router;
