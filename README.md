# courses-api-backend
small api project that can do CRUD operation 

# postman collection key :
https://api.postman.com/collections/25134711-bea668f8-8bf6-4620-b0b0-80d76154ba5c?access_key=PMAT-01HC03RNEEG1Z5K20M42A0MK1Y

# What Should I Do If I Want To Try The application ? follow these commands
- clone the project 
- $ npm install 
- $ npm run start or node index.js

# Procet Details
- in this project i applied the CRUD opreation using express,
- the project devided two main subeject course section - user section
- the course section contain  (get-all-courses,get-single-course,create-course,update-course,delete-course)
  -the courses  cant be accessed without login first  provieded with token
- the user section contain (get-all-users,register,login)
  - get-all-users -> only ADMIN role cant access to it
  - register -> reqister user to the system and the user cant  reqister twice with the same email
  - login -> the user should register first if  not and login need the email and password to login successfully
# Project Feature
  - token provied to access
  - different role for users(USER,ADMIN)
  - hached passwod
  - migration and seeder
# Project Technology And Framoworks
  - node.js
  - express.js
  - mongodb
  - mongoose.js
  - npm package manager
  

