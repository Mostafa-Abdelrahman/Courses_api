# express-api-smallProject
small api project that can do CRUD operation 

postman collection key :
https://api.postman.com/collections/25134711-f0b7cf95-2f6a-49f6-a912-69938da490cd?access_key=

# What Should I Do If I Want To Try The application ? follow these commands
1-clone the project 
2-$ npm install 
3-$ npm run start or node index.js

#Procet Details
- in this project i applied the CRUD opreation using express,
- the project devided two main subeject course section - user section
- the course section contain  (get-all-courses,get-single-course,create-course,update-course,delete-course)
  -the courses  cant be accessed without login first  provieded with token
- the user section contain (get-all-users,register,login)
  - get-all-users -> only ADMIN role cant access to it
  - register -> reqister user to the system and the user cant  reqister twice with the same email
  - login -> the user should register first if  not and login need the email and password to login successfully
# Project Feature
  -token provied to access
  -different role for users(USER,ADMIN)
  -hached passwod
  -migration and seeder
# Project Technology And Framoworks
  -node.js
  -express.js
  -mongodb
  -mongoose.js
  -npm package manager
  

