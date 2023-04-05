const { OK } = require("../constant/statusCode");
const AppError = require("../helpers/AppError");
const StudentService = require("../service/studentService");
const StudyPlanService = require("../service/studyPlanService");
const SubjectService = require("../service/subjectService");

class StudyPlanController {
	static async createStudyPlan(req, res) {
		const { studentId, subjectId } = req.body;

		const student = await StudentService.findStudentById(studentId);
		const studentSubjects = await student.getSubjects();

		if (studentSubjects.length > 4) {
			return res.json({
				message: "Student already have 3 subjects",
			});
		}

		const studyPlan = await StudyPlanService.createStudyPlan(
			studentId,
			subjectId
		);

		if (!studyPlan) {
			throw new AppError(400, "Cannot create study plan", 400);
		}

		return res.json({ studyPlan });
	}
}

module.exports = StudyPlanController;
