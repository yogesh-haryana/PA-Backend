const reviewRouter = require("express").Router();
const { submitReportByUser, getUserReportbyEmpId } = require("../controllers/reviewsControllers");

reviewRouter.route("/").post(submitReportByUser);
reviewRouter.route("/:empId").get(getUserReportbyEmpId);

module.exports = reviewRouter;
