import { Link } from "react-router-dom";
import { FaEllipsisV, FaRegEdit } from "react-icons/fa";
import "./index.css";
import { CourseType } from "../Util";

type DashboardProps = {
    courses: CourseType[], course: CourseType, setCourse: any, addNewCourse: any, deleteCourse: any, updateCourse: any
};

function Dashboard( { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: DashboardProps ) {     //  Move the state variables and event handler functions to Kanbas and then accept them as parameters.
    return (
        <>
            <div className="d-none d-sm-block sticky-top wd-dashboard wd-dashboard-component"> 
                <h1>Dashboard</h1> 
                <hr/>
            </div>

            <div className="d-block d-sm-none wd-dashboard-component">
                <p className="wd-three-dot-menu-dash"><FaEllipsisV /></p>
                <hr />
            </div>
            
            <div className="wd-dashboard-component">
                <h5>Course Form</h5>
                <input id="courseName" value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                <input id="courseNumber" value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
                <input id="courseSemester" value={course.semester} className="form-control" onChange={(e) => setCourse({ ...course, semester: e.target.value }) } />
                <input id="courseStartDate" value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
                <input id="courseEndDate" value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
                <button className="btn btn-light btn-outline-dark me-2 mt-2" onClick={addNewCourse}>Add</button>
                <button className="btn btn-light btn-outline-dark mt-2" onClick={updateCourse}>Update</button>
                <hr />
                <h2>Published Courses ({courses.length})</h2> 
                <hr />
            </div>

            <div className="row wd-dashboard-component">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
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