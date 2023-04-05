const router = require("express").Router();
const { tryCatch } = require("../utils/tryCatch");
const errorMiddleware = require("../middleware/errorMiddleware");
const SubjectController = require("../controller/subjectController");

router.get("/", tryCatch(SubjectController.getAllSubjects));

router.post("/", tryCatch(SubjectController.createSubject));

router.get("/:id", tryCatch(SubjectController.geSubjectById));

router.put("/:id", tryCatch(SubjectController.updateSubject));

router.delete("/:id", tryCatch(SubjectController.deleteSubject));

router.use(errorMiddleware);

module.exports = router;
