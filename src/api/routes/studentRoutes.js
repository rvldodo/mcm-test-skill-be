const router = require("express").Router();
const { tryCatch } = require("../utils/tryCatch");
const errorMiddleware = require("../middleware/errorMiddleware");
const StudentController = require("../controller/studentController");

router.post("/", tryCatch(StudentController.createStudent));

router.get("/", tryCatch(StudentController.getAllStudents));

router.get("/:id", tryCatch(StudentController.getStudentById));

router.put("/:id", tryCatch(StudentController.updateStudent));

router.delete("/:id", tryCatch(StudentController.deleteStudent));

router.use(errorMiddleware);

module.exports = router;
