import mongoose from 'mongoose';

//schema for Events
const eventSchema = new mongoose.Schema({
    
    eventDate: {
        type: String,
        required: "eventDate is required",
    },

    eventName: {
        type: String,
        required: "event name is required",
    },

    eventId: {
        type: String,
        required: "eventId is required",
        unique:true,
    },

    eventImage: {
        type: String,
        default: ""
    },

    eventTime: {
        type: String,
        required: "Event Time is required"
    },

    eventDescription: {
        type: String,
        default: "A social event is defined as an event characteristic of people forming groups. This can refer to events, shows, social functions and parties, contests and competitions."
    },

    eventLocation: {
        type: String,
        default: "https://maps.google.com/maps?q=Northeastern%20University&t=&z=13&ie=UTF8&iwloc=&output=embed"
    },

    NumberOfUsersRegistered: {
        type: Number,
        default: 0
    }
})
const model = mongoose.model('eventMasterData', eventSchema);
export default model;