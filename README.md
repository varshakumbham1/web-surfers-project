<h3>TITLE OF THE PROJECT</h3>             

**NU Events**
                                             
  
                                        ========================================
                                                     INTRODUCTION
                                        ========================================

**Team Name:**  Web Surfers            
 
**Team Members:**
- Varsha Reddy Kumbham - 002762752, kumbham.v@mortheastern.edu          ​       
- Devika Boddu - 002727628​ , boddu.d@northeastern.edu          
- Sindhura Bandaru -002727624​ , bandaru.si@northeastern.edu         
- Sahithi Gaddam- 002766983​ , gaddam.sahi@northeastern.edu          

**Repo Link**
```bash
git@github.com:neu-mis-info6150-fall-2022/final-project-web-surfers.git
```

                                        ========================================
                                                     PROBLEM STATEMENT
                                        ========================================    
          
As an University Student it is really difficult to gather information about events from  Social Media(Instagram, Facebook, Whatsapp... etc ) beside completing assignments and term exams. Imagine if we could have a website having all the details about different events where everyone can register and track them in a single go.          

                                        ==================================
                                                     SOLUTION
                                        ==================================    
  
Husky Events is a one stop destination for all the online/offline happenings in Northeastern University. This web application gives you
details about several types of events where in a user can initially signup/login to the website, search for an event which he is intrested in, register and adds it to calender which makes simplified for the user to keep a track of all the events.           

A responsive web application has been created and styled using SASS which uses ReactJS for the frontend supported by a scalable NodeJS backend that routes requests to suitable business layer logic functions via the ExpressJS middleware. MongoDB database is used to store both user input and information presented on the various pages of the application. Additionally, the app makes use of a number of open-source APIs to offer extra features like calender, events, sharing to thrid party applications, etc.


                                        
                                        ========================================
                                            USER REQUIREMENTS/ USER STORIES
                                        ========================================   

- As a user, I can login. 
- As a user, I can create my profile. User profile will have personal details such as name, age, gender, height, weight, date of birth, location (city and country), and photo. 
- As a user, I am able to receive a welcome email upon sigup. 
- As a user, I can update my profile at any time.
- As a user, I have access to events dashboard page with details about several happenings in the University.
- As a user, I can search/explore for a specific event based upon the Event Name.
- As a user, I can bookmark for an event I am interested in so that I can checkout later.
- As a user, I can see the bookmarked items and delete it later from the list.
- As a user, I can register for a single/multiple events which matches my Interest.
- As a user, I have a section for Myevents where all the events registered making easier to keep a track of them.
- As a user, I can view the event info in detail.
- As a user, I can view and navigate to the event location using Maps functionality in the application.
- As a user, I can share the event to our peers through Social media platforms via Facebook, Linkedin and Twitter.
- As a user, I can read/write blogs about the event attended which makes easier for people to get an overview about the happening.
- As a user, I can view all my events under the event date displayed on the calender which makeseasier to keep a track of all the events.
- As a user, I can unregister for an event from Myevents section so that event is no longer visible on the page.
- As a Admin, I can create a new event.
- As a Admin, I can delete an event.
- As an Admin, I can get the number of registered users for an event.
- As a user, I can sign out. 
         


                                        ========================================
                                                    DOMAIN MODEL
                                        ========================================                 

**Work Flow**            

![Model Diagram](./Flow_Diagram/Domain_Model.png)       


                                        ========================================
                                                   INSTALLATIONS
                                        ========================================
**Dependencies**

- Node version - v12.6.0 and above or (LTS)
- NPM version - v6.0 and above or (LTS)
- SASS compiler - v1.49.9 or (LTS)
- mongoose - v6.7.2 or (LTS)
- express: v4.18.2 or (LTS)
- nodemailer: v6.8.0 or (LTS)


**Steps to run**

- Install the above mentioned dependencies.
- Clone the repo.
- Running front-end web application - Change the directory to client and run the command. 
```bash 
npm start
```
- Running backend server -  Change the directory to server and run the command.
```bash 
npm run start
```