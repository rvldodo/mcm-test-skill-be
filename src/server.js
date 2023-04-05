const express = require("express");
const bodyParser = require("body-parser");
const swaggerUI = require("swagger-ui-express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// import sequelize from model
const { sequelize } = require("./api/models");

// setting swagger
const apiDocs = require("./config/apiDocs.json");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(apiDocs));

// routes
app.use("/api/students", require("./api/routes/studentRoutes"));
app.use("/api/study-plan", require("./api/routes/studyPlanRoutes"));
app.use("/api/subjects", require("./api/routes/subjectRoutes"));

app.listen(PORT, async () => {
	console.log(`Server running on port ${PORT}`);
	await sequelize.authenticate();
	console.log(`DB connected to server`);
});
