"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("Students", [
			{
				id: 1,
				firstName: "John",
				middleName: "William",
				lastName: "Smith",
				email: "john.smith@example.com",
				age: 18,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 2,
				firstName: "Jane",
				middleName: "Elizabeth",
				lastName: "Doe",
				email: "jane.doe@example.com",
				age: 19,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 3,
				firstName: "Michael",
				middleName: "David",
				lastName: "Johnson",
				email: "michael.johnson@example.com",
				age: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 4,
				firstName: "Sarah",
				middleName: "Marie",
				lastName: "Wilson",
				email: "sarah.wilson@example.com",
				age: 21,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 5,
				firstName: "David",
				middleName: "Richard",
				lastName: "Brown",
				email: "david.brown@example.com",
				age: 22,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Students", null, {});
	},
};
