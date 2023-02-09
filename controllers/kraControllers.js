const { KRAModel } = require("../KraModels");

const getAllKRAs = async (req, resp) => {
  const request = req.body;
  let data;
  if (request) {
    data = await KRAModel.find({ request });
  } else {
    data = await KRAModel.find({});
  }
  resp.status(200).json(data);
};

const getKRAsByDesignation = async (req, resp) => {
  const query = req.params.desig;
  const data = await KRAModel.find({ designation: query });
  resp.status(200).json(data);
};

const addNewKRA = async (req, resp) => {
  const data = new KRAModel(req.body);
  await data.save();
  resp.json({
    message: "KRA Added Successfully",
  });
};

const deleteKRAbyId = async (req, resp) => {
  // eslint-disable-next-line no-underscore-dangle
  const _id = req.params.id;
  await KRAModel.findByIdAndDelete({ _id });
  resp.send("Delete Success");
};

const updateKraById = async (req, resp) => {
  const { id } = req.params;
  const data = await KRAModel.findByIdAndUpdate(id, req.body);
  resp.status(200).json(data);
};

module.exports = {
  getAllKRAs,
  getKRAsByDesignation,
  addNewKRA,
  deleteKRAbyId,
  updateKraById,
};
