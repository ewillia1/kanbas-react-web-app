import { Navigate, Route, Routes, useParams } from "react-router-dom";
import "./index.css";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import BlackHeader from "../BlackHeader";
import Home from "./Home";
import Breadcrumb from "./Breadcrumb";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { CourseType } from "../Util";
import Quizzes from "./Quizzes";
import QuizDetails from "./Quizzes/Details";
import QuizDetailsEditor from "./Quizzes/DetailsEditor";
import QuizPreview from "./Quizzes/Preview";

type CoursesProp = {
    courses: CourseType[]
};

function Courses({ courses }: CoursesProp) {
    const { courseId } = useParams();                                           // Accept courses from Kanbas.
    const course = courses.find((course) => course._id === courseId);      // Find the course by its ID.

    return (
        <>
            <Breadcrumb courses={courses}/>
            <div className="row">
                <CourseNavigation />

                <div className="d-block d-md-none wd-0-lr-padding">
                    <BlackHeader/>
                </div>

                <div className="col-12 col-sm-12 col-md-11 col-lg-11 col-xl-11 col-xxl-11" style={{paddingLeft: "12vw", paddingRight: "12vw"}}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Grades" element={<Grades />} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
                        <Route path="Quizzes" element={<Quizzes/>} />
                        <Route path="Quizzes/DetailsEditor/:quizId" element={<QuizDetailsEditor/>}/>
                        <Route path="Quizzes/QuizDetails/:quizId" element={<QuizDetails/>}/>
                        <Route path="Quizzes/Preview/:quizId" element={<QuizPreview/>}/>
                        <Route path="People" element={<h1>People</h1>} />
                        <Route path="Panopto_Video" element={<h1>Panopto Video</h1>} />
                        <Route path="Discussions" element={<h1>Discussions</h1>} />
                        <Route path="Announcements" element={<h1>Announcements</h1>} />
                        <Route path="Pages" element={<h1>Pages</h1>} />
                        <Route path="Files" element={<h1>Files</h1>} />
                        <Route path="Rubrics" element={<h1>Rubrics</h1>} />
                        <Route path="Outcomes" element={<h1>Outcomes</h1>} />
                        <Route path="Collaborations" element={<h1>Collaborations</h1>} />
                        <Route path="Syllabus" element={<h1>Syllabus</h1>} />
                        <Route path="Settings" element={<h1>Settings</h1>} />

                        <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
                        <Route path="Progress Reports (EAB Navigate)" element={<h1>Progress Reports (EAB Navigate)</h1>} />
                    </Routes>
                </div>
            </div>
        </>
  );
}
export default Courses;