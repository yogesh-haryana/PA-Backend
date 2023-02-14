const { ToggleSetting } = require("../settingModel");

const updateSetting = async (req, resp) => {
  const { id } = req.params;
  const data = await ToggleSetting.updateOne({ _id: id }, { $set: req.body });
  resp.status(200).json(data);
};

const getSetting = async (_, resp) => {
  const data = await ToggleSetting.find({});
  resp.status(200).json(data);
};

const postSetting = async (req, resp) => {
  const data = new ToggleSetting(req.body);
  await data.save();
  resp.send(data);
};

module.exports = { updateSetting, getSetting, postSetting };
