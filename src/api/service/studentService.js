const { Subjects, Students } = require("../models");

class StudentService {
	static async createStudent(firstName, middleName, lastName, email, age) {
		return await Students.create({
			firstName,
			middleName,
			lastName,
			email,
			age,
		});
	}

	static async findAllStudents() {
		return await Students.findAll({
			attributes: {
				exclude: ["createdAt", "updatedAt"],
			},
			include: [
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

	static async findStudentById(id) {
		return await Students.findOne({
			where: { id },
			attributes: {
				exclude: ["createdAt", "updatedAt"],
			},
			include: [
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

	static async findStudentByEmail(email) {
		return await Students.findOne({
			where: { email },
		});
	}

	static async deleteStudentById(id) {
		return await Students.destroy({
			where: { id },
		});
	}
}

module.exports = StudentService;
