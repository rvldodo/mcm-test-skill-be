const { Subjects, Students, StudyPlans } = require("../models");

class StudyPlanService {
	static async createStudyPlan(studentId, subjectId) {
		return await StudyPlans.create({ studentId, subjectId });
	}

	static async findAllStudyPlan() {
		return await StudyPlans.findAll({
			attributes: {
				exclude: ["createdAt", "updatedAt"],
			},
			include: [
				{
					model: Students,
					through: {
						attributes: [],
					},
					attributes: {
						exclude: ["createdAt", "updatedAt"],
					},
				},
				{
					model: Subjects,
					through: {
						attributes: [],
					},
					attributes: {
						exclude: ["createdAt", "updatedAt"],
					},
				},
			],
		});
	}

	static async findStudyPlanById(id) {
		return await StudyPlans.findOne({
			where: { id },
			attributes: {
				exclude: ["createdAt", "updatedAt"],
			},
			include: [
				{
					model: Students,
					as: "students",
					through: {
						attributes: [],
					},
					attributes: {
						exclude: ["createdAt", "updatedAt"],
					},
				},
				{
					model: Subjects,
					as: "subjects",
					through: {
						attributes: [],
					},
					attributes: {
						exclude: ["createdAt", "updatedAt"],
					},
				},
			],
		});
	}

	static async deleteStudyPlanById(id) {
		return await StudyPlans.destroy({
			where: { id },
		});
	}

	static async deleteStudyPlanByStudentId(studentId) {
		return await StudyPlans.destroy({
			where: { studentId },
		});
	}

	static async deleteBySubjectId(subjectId) {
		return await StudyPlans.destroy({
			where: { subjectId },
		});
	}
}

module.exports = StudyPlanService;
