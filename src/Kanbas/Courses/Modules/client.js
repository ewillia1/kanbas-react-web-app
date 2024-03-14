import axios from "axios";

const COURSES_API = "http://localhost:4000/api/courses";

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