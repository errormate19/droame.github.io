# CRUD Application

➤ Created a web application that allows the operator to manage customers details like their id,name,username,email and phone number by storing this data in the  backend tables. To clarify more, this website is meant for operators only.                                                                                           

➤ Through this website, operators are able to create, edit and delete details of a particular customer using a database schema.                                                                                                                                                                                                          

Technologies Used:                                                                                                                                                   
Frontend: React.js & Material-UI                                                                                                                                     
Backend: Node.js & Express.js                                                                                                                                       
Database: MongoDB                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                     
Video link: https://drive.google.com/file/d/190A8l3E8z-3r9ENUIFR_pcgbIByjil3C/view                                                                                                                                                                                                                                                       

To perform CRUD (Create, Read, Update, Delete) operations on a MongoDB collection that stores customer details,steps followed are:
1.Connect to the MongoDB server using a MongoDB client or driver.                                                                                                       
2.Choose a database and collection that will store customer details.                                                                                                   
3.CREATE:Create a customer document with the required fields such as name, email, address, etc. and insert it into the collection using the insertOne or insertMany method by pressing on Add customer button.                                                                                                                             
4.Retrieve customer details from the collection using the find method.Results can be filtered by specifying a query object.                                             
5.READ: To read customer records, you can use the find() method with optional query and projection parameters.                                                         
6.UPDATE: Update customer details in the collection using the updateOne or updateMany method. A filter can be specified to select the documents to update and a set of update operators to modify the fields.                                                                                                                                 
7.DELETE: Delete customer details from the collection using the deleteOne or deleteMany method. A filter can be specified to select the documents to delete
  based on their ID or other criteria.                                                                                                                              
                                                                                                                                                                      
  Dependencies installed for frontend part in client folder:                                                                                                           1.npx create-react-app                                                                                                                                            
  2.npm install @mui/material @emotion/react @emotion/styled                                                                                                         
  3.npm i react-router-dom                                                                                                                                           
  4.npm i axios                                                                                                                                                     
  
  Dependencies installed for backend part in server folder:
  1.npm init                                                                                                                                                         
  2.npm i express                                                                                                                                                   
  3.npm i mongoose                                                                                                                                                   
  4.npm i nodemon                                                                                                                                                   
  5.npm i dotenv                                                                                                                                                     
  6.npm i cors                                                                                                                                                       
  7.npm i body-parser                                                                                                                                               
  8.npm i mongoose-auto-increment                                                                                                                                   
  9.npm i --legacy-peer-deps mongoose-auto-increment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
 To run the application=>
 1.cd client/npm start
 2.cd server/npm start

  
   
    
     
