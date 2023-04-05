"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Students extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Students.belongsToMany(models.Subjects, {
				through: models.StudyPlans,
				foreignKey: "studentId",
				onDelete: "cascade",
			});
		}
	}
	Students.init(
		{
			firstName: DataTypes.STRING,
			middleName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
			age: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Students",
		}
	);
	return Students;
};
