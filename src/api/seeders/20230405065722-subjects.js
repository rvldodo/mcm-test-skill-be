"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("Subjects", [
			{ id: 1, subject: "Math", createdAt: new Date(), updatedAt: new Date() },
			{
				id: 2,
				subject: "Science",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 3,
				subject: "English",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 4,
				subject: "History",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{ id: 5, subject: "Art", createdAt: new Date(), updatedAt: new Date() },
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Subjects", null, {});
	},
};
