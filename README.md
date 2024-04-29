# nextjs-mysql
### This project demonstrates how to perform CRUD (Create, Read, Update, Delete) operations using Next.js, a React framework and Mysql database.
# Features
+ Add new data to a database
+ Retrieve existing data from the database
+ Update existing data in the database
+ Delete data from the database
# File Structure
+ All API's for Add,Update,Delete,Fetch are in pages/api folder
+ Form.js has all front end code 

# Prerequisites
+ Node.js installed on your machine
+ MySQL database installed and running
+ Basic knowledge of React and Next.js

Usage
+ Add Data: Use the form provided in the application to add new data. All fields are required, and the age field must be a positive number.
+ View Data: Existing data will be displayed in a table. You can view, update, or delete each item using the provided buttons.
+ Real-time Updates: Updates and deletions will be reflected in real-time without the need for page refresh.

# Steps to follow
+ First create next js app by using command `npx create-next-app appname` in terminal
+ Don't select yes for src/directory,tailwind css while creating
+ I am using bootstrap not tailwind css
+ Need to install bootstarp using command`npm install bootstrap`
+ Paste bootstrap link `import 'bootstrap/dist/css/bootstrap.css';` in layout.js
+ Place all API's file in pages/api folder if it is not exist create it
+ Import Form.js in page.js
+ In terminal type `npm run dev` to run

