
export const setErrorResponse = (err, response) =>{
    response.status(500);
    response.json(err);
}

export const setSuccessResponse = (obj, response) =>{
    response.status(200);
    response.json(obj);
}

export const setUnauthorizedResponse = (obj, response) =>{
    response.status(401);
    response.json(obj);
}

export const setForbiddenResponse = (obj, response) =>{
    response.status(403);
    response.json(obj);
}

export const setConflictResponse = (obj, response) => {
    response.status(409);
    response.json(obj);
}