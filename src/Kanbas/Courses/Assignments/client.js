import axios from "axios";

const COURSES_API = "http://localhost:4000/api/courses";

const ASSIGNMENTS_API = "http://localhost:4000/api/assignments";

// updateAssignment service function that sends an HTTP PUT request to the server embedding the assignment's ID in the path
// and updates the HTTP body.
// Reponse's data will be a status code.
export const updateAssignment = async (assignment) => {
    const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return response.data;
};  

// deleteAssignment service function that sends an HTTP DELETE request to the server encoding the assignment's ID in the path.
// Reponse contains a status code.
export const deleteAssignment = async (assignmentId) => {
    const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
};

// Post a new assignment object in the body and encode the courseId in the path.
// Response's data contains the newly created assignment from the server.
// Append new assignment to the cached assignments in the assignment reducer.
export const createAssignment = async (courseId, assignment) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
    return response.data;
};  

export const findAssignmentsForCourse = async (courseId) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};