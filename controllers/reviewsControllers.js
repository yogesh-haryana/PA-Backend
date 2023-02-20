const { Report } = require("../ReportModel");

const submitReportByUser = async (req, resp) => {
  const data = new Report(req.body);
  const res = await data.save();
  resp.send({
    status: res.status,
    message: "data posted SucessFully",
  });
};

const getUserReportbyEmpId = async (req, resp) => {
  const { empId } = req.params;
  const data = await Report.find({ empId });
  resp.status(200).json(data);
};

module.exports = { submitReportByUser, getUserReportbyEmpId };
