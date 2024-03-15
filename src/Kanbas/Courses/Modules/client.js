import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

const COURSES_API = `${API_BASE}/api/courses`;

const MODULES_API = `${API_BASE}/api/modules`;

// updateModule service function that sends an HTTP PUT request to the server embedding the module's ID in the path
// and updates the HTTP body.
// Reponse's data will be a status code.
export const updateModule = async (module) => {
    const response = await axios.put(`${MODULES_API}/${module._id}`, module);
    return response.data;
};  

// deleteModule service function that sends an HTTP DELETE request to the server encoding the module's ID in the path.
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