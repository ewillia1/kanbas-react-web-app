import { Link } from "react-router-dom";
import { FaEllipsisV, FaRegEdit } from "react-icons/fa";
import "./index.css";
import { useState } from "react";
import { courses } from "../Database";

function Dashboard() {
    console.log("courses = " + courses);

    const [_courses, setCourses] = useState(courses);  
    
    const [course, setCourse] = useState({
        _id: "0", name: "New Course", number: "New Number", semester: "New Semester",
        startDate: "2024-09-10", endDate: "2024-12-15",
        image: "/images/reactjs.jpg"
    });

    const addNewCourse = () => {
        const newCourse = { ...course,  _id: new Date().getTime().toString() };
        console.log("newCourse = " + newCourse);
        setCourses([..._courses, { ...course, ...newCourse }]);
    };

    const deleteCourse = (courseId: string) => {
        const courseToDelete = _courses.filter((course) => course._id !== courseId);
        console.log("courseToDelete = " + courseToDelete);
        setCourses(courseToDelete);
    };
    
    const updateCourse = () => {
        const updatedCourse = _courses.map((c) => (c._id === course._id ? course : c));
        console.log("updatedCourse = " + updatedCourse);
        setCourses(updatedCourse);
    };

    console.log("_courses = " + _courses);
    
    return (
        <>
            <div className="d-none d-sm-block sticky-top wd-dashboard wd-dashboard-component"> 
                <h1>Dashboard</h1> 
                <hr/>
            </div>

            <div className="d-block d-sm-none wd-dashboard-component">
                <p className="wd-three-dot-menu"><FaEllipsisV /></p>
                <hr />
            </div>
            
            <div className="wd-dashboard-component">
                <h5>Course</h5>
                <input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                <input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
                <input value={course.semester} className="form-control" onChange={(e) => setCourse({ ...course, semester: e.target.value }) } />
                <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
                <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
                <button className="btn btn-light btn-outline-dark me-2 mt-2" onClick={addNewCourse}>Add</button>
                <button className="btn btn-light btn-outline-dark mt-2" onClick={updateCourse}>Update</button>
                <hr />
                <h2>Published Courses ({_courses.length})</h2> 
                <hr />
            </div>

            <div className="row wd-dashboard-component">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {_courses.map((course) => (
                        <div key={course._id} className="col wd-course-card-col" style={{ width: 300 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top wd-card-image" style={{ height: 150 }} alt="course card"/>
                                <div className="card-body">
                                    <Link className="card-title wd-card-title" to={`/Kanbas/Courses/${course._id}/Home`} style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        <p className="wd-nowrap" style={{marginBottom: "2px"}}>{course.name}</p>
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-light btn-outline-dark me-2" onClick={(event) => { event.preventDefault(); setCourse(course); }}>
                                                Edit
                                            </button>
                                            <button className="btn btn-light btn-outline-dark" onClick={(event) => { event.preventDefault(); deleteCourse(course._id); }}>
                                                Delete
                                            </button>
                                        </div>
                                    </Link>
                                    <p className="card-text wd-nowrap" style={{marginBottom: "2px"}}>{course.number}</p>
                                    <p className="card-text wd-nowrap" style={{marginBottom: "2px", fontSize: "smaller"}}>{course.semester}</p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn" style={{fontSize: "25px", border: "0", padding: "0"}}><FaRegEdit /></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );    
}
export default Dashboard