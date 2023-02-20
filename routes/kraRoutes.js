const kraRouter = require("express").Router();
const {
  getAllKRAs,
  getKRAsByDesignation,
  addNewKRA,
  deleteKRAbyId,
  updateKraById,
  getKRAsbyDeptAndDesig,
} = require("../controllers/kraControllers");

kraRouter.route("/").get(getAllKRAs);
kraRouter.route("/:desig").get(getKRAsByDesignation);
kraRouter.route("/filtered/").get(getKRAsbyDeptAndDesig);
kraRouter.route("/:id").delete(deleteKRAbyId);
kraRouter.route("/").post(addNewKRA);
kraRouter.route("/update/:id").patch(updateKraById);

module.exports = kraRouter;
