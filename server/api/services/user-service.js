import User from '../models/user.js';
import nodemailer from 'nodemailer';

//transporter to send mail to signedup users
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "nuevents2022@gmail.com",
        pass: "gmzlepiwqaizkgpq"
    }
});
/**
 * Function to add a new user
 * @param {*} newUser 
 * @returns created user object
 */
 export const save = (newUser)=>{
    try {
        const user = new User(newUser);
        return user.save();
    }catch(error){
        throw error
    }
}

//service method to login user
export const login = async (uuid, pwd)=>{
    try {
    const user = await User.findOne({uuid:uuid});
    const res = await user.comparePwd(pwd);
    if(res){
        return { authenticated: res, user: user };
    }else{
        return { authenticated: res, message: 'Incorrect Password!'};
    }
    } catch (error) {
        throw error
    }
}

//service method to verify Security Answer
export const verifySecurityAnswer = async (uuid,question, answer)=>{
    try {
    const user = await User.findOne({uuid:uuid});
    if(user !== null){
        const res1 = await user.compareSecQuestion(question);
        const res2 = await user.compareSecAns(answer);
        return (res1 && res2);
    }else{
        return false;
    }
    } catch (error) {
        throw error
    } 
}

//service method to update user by uuid
export const updateUser = async (uuid, updatedUser) =>{
    try {
        const user = await User.findOneAndUpdate({uuid: uuid}, updatedUser , {returnDocument:'after'});
        return user;
    } catch (error) {
        throw error;
    }
}

//service method to save registered event
export const saveRegisteredEvent = async (uuid, eventID) => {
    try{
        const findUser = await User.findOne({uuid : uuid});
        if(!findUser.eventsRegistered.includes(eventID)){
            const user = await User.findOneAndUpdate({uuid : uuid}, 
                { $push: { eventsRegistered:  eventID} }, {returnDocument:'after'});
                return {user: user, message: "Event Registered Successfully"};
        }
        else{
            return {user: findUser, message: "Event Already Registered"};
        }
    } catch(error){
        throw error;
    }
}

//service method to save interested event
export const saveInterestedEvent = async (uuid, eventID) => {
    try{
        const findUser = await User.findOne({uuid : uuid});
        if(!findUser.eventsInterested.includes(eventID)){
            const user = await User.findOneAndUpdate({uuid : uuid}, 
                { $push: { eventsInterested:  eventID} }, {returnDocument:'after'});
                return {user: user, message: "Event Bookmarked Successfully"};
        }
    } catch(error){
        throw error;
    }
}

//service method to delete unregistered event
export const unregisterEvent = async (uuid, eventID) => {
    try{
        const user = await User.findOneAndUpdate({uuid : uuid}, 
        { $pull: { eventsRegistered:  eventID} }, {returnDocument:'after'});
        return {user: user, message: "Event Unregistered Successfully"};
    } catch(error){
        throw error;
    }
}

//service method to delete unbookmarked event
export const unbookmarkEvent = async (uuid, eventID) => {
    try{
        const user = await User.findOneAndUpdate({uuid : uuid}, 
        { $pull: { eventsInterested:  eventID} }, {returnDocument:'after'});
        return {user: user, message: "Event Unbookmarked Successfully"};
    } catch(error){
            throw error;
    }
}

//service method to delete event from registered events
export const deleteEventFromUser = async (event) => {
    try{
        const users = await getUsers()

        for(let i = 0; i<users.length; i++){
            if(users[i].eventsRegistered.includes(event.eventId)){
                const user = await User.findOneAndUpdate({uuid : users[i].uuid}, 
                    { $pull: { eventsRegistered:  event.eventId} }, {returnDocument:'after'});

                    const options = {
                        from: "nuevents2022@gmail.com",
                        to: users[i].email,
                        subject: `${event.eventName} is cancelled`,
                        text: "Hi Unfortunately " + event.eventName +" has been cancelled"
                    };

                    transporter.sendMail(options, function (err, info) {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        console.log("sent :" + info.response);
                    })
            }
            if(users[i].eventsInterested.includes(event.eventId)){
                const user = await User.findOneAndUpdate({uuid : users[i].uuid}, 
                    { $pull: { eventsInterested:  event.eventId} }, {returnDocument:'after'});
            }
        }
        
        const updatedUsers = getUsers();
        return updatedUsers;
    }catch(error){
        throw error;
    }
}

//service method to get all Users
export const getUsers = async () => {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        throw error;
    }
}

//service method to get user by uuid
export const getUserById = async (uuid) => {
    try {
        const user = await User.findOne({uuid: uuid});
        return user;
    } catch (error) {
        throw error;
    }
}