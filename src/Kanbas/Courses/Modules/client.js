import axios from "axios";

const COURSES_API = "http://localhost:4000/api/courses";

const MODULES_API = "http://localhost:4000/api/modules";

// deletModule service function that sends an HTTP DELETE request to the server encoding the module's ID in the path.
// Reponse contains a status code.
export const deleteModule = async (moduleId) => {
    const response = await axios.delete(`${MODULES_API}/${moduleId}`);
    return response.data;
};

// Post a new module object in the body and encode the courseId in the path.
// Response's data contains the newly created module from the server.
// Append new module to the cached modules in the module reducer.
export const createModule = async (courseId, module) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module);
    return response.data;
};  

export const findModulesForCourse = async (courseId) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};