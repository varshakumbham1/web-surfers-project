import Event from '../models/eventList.js';

//service method to add Event to db
export const addEvent = async (newEvent) => {
    try{
        const event = new Event(newEvent)
        return event.save()
    }catch (error) {
        throw error;
    }
}

//service method to get all events from db
export const getEvents = async (query) => {
    try{
        const events = await Event.find(query);
        return events;
    }catch (error) {
        throw error;
    }
} 

//service method to get Event by db from db
export const getEventById = async (eventId) => {
    try{
        const event = await Event.find({eventId: eventId});
        return event;
    }catch (error) {
        throw error;
    }
}

//service method to delete event by eventId
export const deleteEventById = async (id) => {
    try{
        const event = await Event.findOneAndDelete({eventId: id})
        return event;
    }catch(error){
        throw error;
    }
}

//service method to count the number of users registered for a given event
export const countOfRegisteredUsers = async (id, isRegistered) => {
    try{
        const findEvent = await Event.findOne({eventId: id})
        if(isRegistered === true) {
            const event = await Event.findOneAndUpdate({eventId: id}, 
                {NumberOfUsersRegistered: findEvent.NumberOfUsersRegistered+1}, 
                {returnDocument:'after'})
            return event;
        }
        else {
            const event = await Event.findOneAndUpdate({eventId: id}, 
                {NumberOfUsersRegistered: findEvent.NumberOfUsersRegistered-1}, 
                {returnDocument:'after'})
            return event;
        }
    }catch(error){
        throw error;
    }
}
