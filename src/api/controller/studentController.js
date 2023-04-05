const AppError = require("../helpers/AppError");
const StudentService = require("../service/studentService");
const validator = require("validator");
const SubjectService = require("../service/subjectService");
const StudyPlanService = require("../service/studyPlanService");
const { CREATED, OK } = require("../constant/statusCode");

class StudentController {
	static async createStudent(req, res) {
		const { firstName, middleName, lastName, age, email, subjects } = req.body;

		if (!validator.isEmail(email)) {
			throw new AppError(400, "Email invalid", 400);
		}

		const duplicate = await StudentService.findStudentByEmail(email);

		if (duplicate) {
			return res.json({
				message: "Email already exists",
			});
		}

		const student = await StudentService.createStudent(
			firstName,
			middleName,
			lastName,
			email,
			age
		);

		if (subjects.length > 3) {
			return res.json({
				message: "Student can only have 3 subjects",
			});
		}

		let availableSubjects = [];
		for (let i = 0; i < subjects.length; i++) {
			const subject = await SubjectService.findSubjectById(subjects[i]);
			const subjectStudents = await subject.getStudents();
			if (subjectStudents.length > 4) {
				return res.json({
					message: `Subject ${subject.subject} already have 4 students`,
				});
			}
			availableSubjects.push(subject.id);
		}

		for (let i = 0; i < availableSubjects.length; i++) {
			await StudyPlanService.createStudyPlan(student.id, availableSubjects[i]);
		}

		return res.status(CREATED).json({
			message: "Student created",
			data: {
				id: student.id,
				fullName: `${student.firstName} ${student.middleName} ${student.lastName}`,
				email: student.email,
			},
		});
	}

	static async getAllStudents(req, res) {
		const students = await StudentService.findAllStudents();

		if (!students) {
			throw new AppError(204, "There are no students found", 400);
		}

		return res.status(OK).json({ students });
	}

	static async getStudentById(req, res) {
		const { id } = req.params;
		const student = await StudentService.findStudentById(id);

		if (!student) {
			throw new AppError(404, "Student not found", 404);
		}

		return res.status(OK).json({ student });
	}

	static async updateStudent(req, res) {
		const { id } = req.params;
		const { firstName, middleName, lastName, email, age } = req.body;

		const student = await StudentService.findStudentById(id);
		if (!student) {
			throw new AppError(404, "Student not found", 404);
		}

		student.firstName = firstName;
		student.middleName = middleName;
		student.lastName = lastName;
		student.email = email;
		student.age = age;
		await student.save();

		return res.status(OK).json({
			message: "Student updated",
		});
	}

	static async deleteStudent(req, res) {
		const { id } = req.params;
		const deletedStudyPlan = await StudyPlanService.deleteStudyPlanByStudentId(
			id
		);

		const deletedStudent = await StudentService.deleteStudentById(id);

		if (!deletedStudent && !deletedStudyPlan) {
			throw new AppError(400, "Cannot delete student", 400);
		}

		return res.status(OK).json({
			message: "Student deleted",
		});
	}
}

module.exports = StudentController;
