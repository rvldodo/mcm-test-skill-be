const router = require("express").Router();
const { tryCatch } = require("../utils/tryCatch");
const errorMiddleware = require("../middleware/errorMiddleware");
const StudyPlanController = require("../controller/studyPlanController");

router.post("/", tryCatch(StudyPlanController.createStudyPlan));

router.use(errorMiddleware);

module.exports = router;
