import KanbasNavigation from "./Navigation"
import "../Kanbas/Courses/Home/index.css";
import "../Kanbas/Dashboard/index.css";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import "./index.css";
import { useState } from "react";
import { courses } from "./Database";
import { CourseType } from "./Util";

function Kanbas() {
    console.log("courses = " + courses);

    const [_courses, setCourses] = useState<CourseType[]>(courses);               // Create _courses array state variable. Initialize with courses from the json file.
    
    const [course, setCourse] = useState({                          // Create course state variable object.
        _id: "0", name: "New Course", number: "New Number", semester: "New Semester",
        startDate: "2024-09-10", endDate: "2024-12-15",
        image: "/blueBackground.jpg"
    });

    const addNewCourse = () => {                                    // Event handler to add new course.
        const newCourse = { ...course,  _id: new Date().getTime().toString() };
        console.log("newCourse = " + newCourse);
        setCourses([..._courses, { ...course, ...newCourse }]);     // Update _courses.
        setCourse({                                                 // Clear the course.
            _id: "0", name: "New Course", number: "New Number", semester: "New Semester",
            startDate: "2024-09-10", endDate: "2024-12-15",
            image: "/blueBackground.jpg"
        });
    };

    const deleteCourse = (courseId: string) => {                    // Event handler to delete a course.
        const courseToDelete = _courses.filter((course) => course._id !== courseId);
        console.log("courseToDelete = " + courseToDelete);
        setCourses(courseToDelete);                                 // Update _courses.
        setCourse({                                                 // Clear the course.
            _id: "0", name: "New Course", number: "New Number", semester: "New Semester",
            startDate: "2024-09-10", endDate: "2024-12-15",
            image: "/blueBackground.jpg"
        });
    };
    
    const updateCourse = () => {                                    // Event handler to update/edit a course.
        const updatedCourse = _courses.map((c) => (c._id === course._id ? course : c));
        console.log("updatedCourse = " + updatedCourse);
        setCourses(updatedCourse);                                  // Update _courses.
        setCourse({                                                 // Clear the course.
            _id: "0", name: "New Course", number: "New Number", semester: "New Semester",
            startDate: "2024-09-10", endDate: "2024-12-15",
            image: "/blueBackground.jpg"
        });
    };

    console.log("_courses = " + _courses);

    return(
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
                        <Route path="Account" element={<h1>Account</h1>} />
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
                        <Route path="Courses/:courseId/*" element={<Courses courses={_courses}/>} />
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
    );
}
export default Kanbas