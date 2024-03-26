import KanbasNavigation from "./Navigation"
import "../Kanbas/Courses/Home/index.css";
import "../Kanbas/Dashboard/index.css";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import "./index.css";
import { useState, useEffect } from "react";
import { CourseType } from "./Util";
import store from "./store";                // Import the redux store.
import { Provider } from "react-redux";     // Import the redux store Provider.
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import Account from "./Account";

const API_BASE = process.env.REACT_APP_API_BASE;

function Kanbas() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [_courses, setCourses] = useState<CourseType[]>([]);               // Create _courses array state variable. Initialize with courses from the json file.
    
    const COURSES_API = `${API_BASE}/api/courses`;
    
    const findAllCourses = async () => {
        const response = await axios.get(COURSES_API);
        setCourses(response.data);
    };

    useEffect(() => {
        findAllCourses();
    }, []);  
    
    const [course, setCourse] = useState({                          // Create course state variable object.
        _id: "0", name: "New Course", number: "New Number", semester: "New Semester",
        startDate: "2024-09-10", endDate: "2024-12-15",
        image: "/blueBackground.jpg"
    });

    const addNewCourse = async () => {                                    // Event handler to add new course.
        try {
            const response = await axios.post(COURSES_API, course);
            setCourses([ ..._courses, response.data ]);
            setCourse({                                                 // Clear the course.
                _id: "0", name: "New Course", number: "New Number", semester: "New Semester",
                startDate: "2024-09-10", endDate: "2024-12-15",
                image: "/blueBackground.jpg"
            });
            setErrorMessage(null);
        } catch (error: any) {
            console.log("error = " + error);
            setErrorMessage(error.response.data.message);
            setShow(true);
        }
    };

    const deleteCourse = async (courseId: string) => {                    // Event handler to delete a course.
        try {
            const response = await axios.delete(`${COURSES_API}/${courseId}`);          
            setCourses(_courses.filter((c) => c._id !== courseId)); 
            setErrorMessage(null); 
        } catch (error: any) {
            console.log("error = " + error);
            setErrorMessage(error.response.data.message);
            setShow(true);
        } 
    };
    
    const updateCourse = async () => {                                    // Event handler to update/edit a course.
        try {
            const response = await axios.put(`${COURSES_API}/${course._id}`, course);      
            setCourses(
                _courses.map((c) => {
                    if (c._id === course._id) {
                        return course;
                    }
                    return c;
                })
            );
            setCourse({                                                 // Clear the course.
                _id: "0", name: "New Course", number: "New Number", semester: "New Semester",
                startDate: "2024-09-10", endDate: "2024-12-15",
                image: "/blueBackground.jpg"
            });
            setErrorMessage(null); 
        } catch (error: any) {
            console.log("error = " + error);
            setErrorMessage(error.response.data.message);
            setShow(true);
        }
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return(
        <Provider store={store}>
            {/* Error pop-up modal. Will only appear if an error occurs in the try-catch blocks above. */}
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Error Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {errorMessage}.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

            <div className="container-fluid wd-main-container">
                <div className="row wd-main-row">
                    {/* Column 1a: Kanbas Navigation. Hide on screen smaller than medium. */}
                    <div className="col-md-1 col-lg-1 col-xl-1 col-xxl-1 d-none d-md-block">
                        <KanbasNavigation/>
                    </div>

                    {/* Column 2a: Rest of screen. */}
                    <div className="col-12 col-sm-12 col-md-11 col-lg-11 col-xl-11 col-xxl-11">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard" />} />
                            <Route path="Account/*" element={<Account/>} />
                            <Route path="Dashboard" element={
                                <Dashboard 
                                    courses={_courses} 
                                    course={course} 
                                    setCourse={setCourse} 
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                />
                            } />
                            <Route path="Courses/:courseId/*" element={<Courses/>} />
                            <Route path="Calendar" element={<h1>Calendar</h1>} />
                            <Route path="Inbox" element={<h1>Inbox</h1>} />
                            <Route path="History" element={<h1>History</h1>} />
                            <Route path="Studio" element={<h1>Studio</h1>} />
                            <Route path="Commons" element={<h1>Commons</h1>} />
                            <Route path="Help" element={<h1>Help</h1>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;