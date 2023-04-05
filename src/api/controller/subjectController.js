const { OK, CREATED } = require("../constant/statusCode");
const AppError = require("../helpers/AppError");
const StudyPlanService = require("../service/studyPlanService");
const SubjectService = require("../service/subjectService");

class SubjectController {
	static async createSubject(req, res) {
		const { subject } = req.body;
		const data = await SubjectService.createSubject(subject);

		if (!data) {
			throw new AppError(400, "Cannot create subject", 400);
		}

		return res.status(CREATED).json({ subject: data });
	}

	static async getAllSubjects(req, res) {
		const subjects = await SubjectService.findAllSubjects();
		if (!subjects) {
			throw new AppError(204, "Subjects not found", 400);
		}

		return res.status(OK).json({ subjects });
	}

	static async geSubjectById(req, res) {
		const { id } = req.params;
		const subject = await SubjectService.findSubjectById(id);

		if (!subject) {
			throw new AppError(404, "Subject not found", 404);
		}

		return res.status(OK).json({ subject });
	}

	static async updateSubject(req, res) {
		const { id } = req.params;
		const { subject } = req.body;
		const data = await SubjectService.findSubjectById(id);
		if (!subject) {
			throw new AppError(404, "Subject not found", 404);
		}

		data.subject = subject;
		await data.save();

		return res.status(OK).json({ message: "Subject updated" });
	}

	static async deleteSubject(req, res) {
		const { id } = req.params;
		await StudyPlanService.deleteBySubjectId(id);
		const deleted = await SubjectService.deleteSubjectById(id);
		if (!deleted) {
			throw new AppError(400, "Cannot delete subject", 400);
		}

		return res.status(OK).json({ message: "Subject deleted" });
	}
}

module.exports = SubjectController;
