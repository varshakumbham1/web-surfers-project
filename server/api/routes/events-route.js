import express from "express";
import * as eventsData from '../controllers/eventList-controller.js';


const router = express.Router();

//route to get all Events and post a new Event
router.route('/eventsData')
    .get(eventsData.getEvents)
    .post(eventsData.addEvent)

//route to get Event by eventId and delete and event by eventId 
router.route('/eventsData/:eventId')
    .get(eventsData.getEventById)
    .delete(eventsData.deleteEventById)

export default router
