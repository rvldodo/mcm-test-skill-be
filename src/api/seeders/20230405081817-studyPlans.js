"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("StudyPlans", [
			{
				id: 1,
				studentId: 1,
				subjectId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 2,
				studentId: 1,
				subjectId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 3,
				studentId: 3,
				subjectId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 4,
				studentId: 4,
				subjectId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 5,
				studentId: 2,
				subjectId: 5,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 6,
				studentId: 5,
				subjectId: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("StudyPlans", null, {});
	},
};
