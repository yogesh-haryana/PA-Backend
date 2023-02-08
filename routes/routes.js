const express = require("express");

const router = express.Router();
const {
  getUsersSignUps,
  setUSersSignUps, setVerifiedUsers, deleteVerifiedUserData,
  getUsersForLogin, getVerifiedUsers, updateUsersInfo,
} = require("../controllers/controllers");

router.route("/").get(getUsersSignUps);
router.route("/").post(setUSersSignUps);
router.route("/:id").delete(deleteVerifiedUserData);
router.route("/verified").post(setVerifiedUsers);
router.route("/verified").get(getUsersForLogin);
router.route("/verified/:dept").get(getVerifiedUsers);
router.route("/verified/1/:id").put(updateUsersInfo);

module.exports = router;
