# How to run it?

1. Clone the repository
2. Run command `npm i` or `yarn add`
3. Create `.env` file in your root and make your port `PORT=<your port>`
4. In `./src/config/config.js` setting your database

![Example image](./public/db_config.png)
change `username` to your DB username
</br>
change`password` to your DB password
</br>
name your DB in `database`

5. Run command `npm run db:sync` or `yarn run db:sync` to create, migrate and seed your database
6. Run command `npm run dev` or `yarn run dev` to running the application
7. In your browser go to routes `/api-docs` to see the swagger documentation

![Example image](./public/swagger_documentation.png)

## Example

See all the subjects
![Example image](./public/get_all_subjects.png)
</br>
</br>
See all students
![Example image](./public/see_all_students.png)
</br>
</br>
Create a student with 3 subjects
![Example image](./public/create_student.png)
</br>Output
![Example image](./public/student_create_output.png)
</br>
</br>
Create a student with 4 subjects
![Example image](./public/subjects_more_than_3.png)
</br>Output
![Example image](./public/subject_more_than_3_output.png)
</br>
</br>
Create with the same email
![Example image](./public/student_register_with_same_email.png)
</br>Output
![Example image](./public/same_email_output.png)
</br>
</br>
Input with subject that already has 4 students
![Example image](./public/subject_created.png)
</br>
Output
![Example image](./public/more_than_4_students_output.png)
</br>
</br>
