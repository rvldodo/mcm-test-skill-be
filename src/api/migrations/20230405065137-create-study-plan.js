"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("StudyPlans", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			studentId: {
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: "Students",
					},
					key: "id",
				},
			},
			subjectId: {
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: "Subjects",
					},
					key: "id",
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: new Date(),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: new Date(),
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("StudyPlans");
	},
};
