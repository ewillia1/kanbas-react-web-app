import { Navigate, Route, Routes, useParams } from "react-router-dom";
import "./index.css";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import BlackHeader from "../BlackHeader";
import Home from "./Home";
import Breadcrumb from "./Breadcrumb";

function Courses() {
    return (
        <div className="row">
            <Breadcrumb/>

            <CourseNavigation />

            <div className="d-block d-md-none wd-0-lr-padding sticky-top">
                <BlackHeader/>
            </div>

            <div className="col" style={{paddingLeft: "12vw", paddingRight: "12vw"}}>
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home/>} />
                    <Route path="Modules" element={<Modules/>} />
                    <Route path="Piazza" element={<h1>Piazza</h1>} />
                    <Route path="Grades" element={<h1>Grades</h1>} />
                    <Route path="Assignments" element={<h1>Assignments</h1>} />
                    <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                    <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                    <Route path="People" element={<h1>People</h1>} />
                    <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
                    <Route path="Discussions" element={<h1>Discussions</h1>} />
                    <Route path="Announcements" element={<h1>Announcements</h1>} />
                    <Route path="Pages" element={<h1>Pages</h1>} />
                    <Route path="Files" element={<h1>Files</h1>} />
                    <Route path="Rubrics" element={<h1>Rubrics</h1>} />
                    <Route path="Outcomes" element={<h1>Outcomes</h1>} />
                    <Route path="Collaborations" element={<h1>Collaborations</h1>} />
                    <Route path="Syllabus" element={<h1>Syllabus</h1>} />
                </Routes>
            </div>
        </div>
  );
}
export default Courses;