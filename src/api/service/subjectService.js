const { Subjects, Students } = require("../models");

class SubjectService {
	static async createSubject(subject) {
		return await Subjects.create({ subject });
	}

	static async findAllSubjects() {
		return await Subjects.findAll({
			attributes: {
				exclude: ["createdAt", "updatedAt"],
			},
			// include: [
			// 	{
			// 		model: Students,
			// 		as: "students",
			// 		through: {
			// 			attributes: [],
			// 		},
			// 		attributes: {
			// 			exclude: ["createdAt", "updatedAt"],
			// 		},
			// 	},
			// ],
		});
	}

	static async findSubjectById(id) {
		return await Subjects.findOne({
			where: { id },
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
			],
		});
	}

	static async deleteSubjectById(id) {
		return await Subjects.destroy({
			where: { id },
		});
	}
}

module.exports = SubjectService;
