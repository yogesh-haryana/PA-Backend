const SettingRouter = require("express").Router();
const { updateSetting, getSetting, postSetting } = require("../controllers/SettingControler");

SettingRouter.route("/:id").put(updateSetting);
SettingRouter.route("/").get(getSetting);
SettingRouter.route("/").post(postSetting);

module.exports = { SettingRouter };
