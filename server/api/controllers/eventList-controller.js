import { httpUtils } from './../utils/index.js';
import { eventData } from './../services/index.js';
import {userService}  from "../services/index.js";

//controller method to fetch all the events from db
export const addEvent = async (request, response) => {
    try{
        const payload = request.body
        const event = await eventData.addEvent(payload)
        httpUtils.setSuccessResponse(event, response);
    }catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}

//controller method to get the events based on query string
export const getEvents = async (request, response) => {
    try{
        const eventDate = request.query.eventDate;
        const eventName = request.query.eventName;
        const eventTime = request.query.eventTime;
        const query = {};
        //appends data to query string
        if(eventDate) {
            query.eventDate = eventDate;
        }
        if(eventName) {
            query.eventName = eventName;
        }
        if(eventTime) {
            query.eventTime = eventTime;
        }
        const events = await eventData.getEvents(query);
        httpUtils.setSuccessResponse(events, response);
    } catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}

//controller method to fetch an Event by eventId
export const getEventById = async (request, response) => {
    try{
        const eventId = request.params.eventId;
        const event = await eventData.getEventById(eventId);
        httpUtils.setSuccessResponse(event, response);
    }catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}

//controller method to delete an Event by eventId
export const deleteEventById = async(request, response) => {
    try{
        const eventId = request.params.eventId;
        const event = await eventData.deleteEventById(eventId);
        const users = await userService.deleteEventFromUser(event);
        httpUtils.setSuccessResponse(event, response);
    }catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}
