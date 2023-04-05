"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class StudyPlans extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	StudyPlans.init(
		{
			studentId: DataTypes.INTEGER,
			subjectId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "StudyPlans",
		}
	);
	return StudyPlans;
};
