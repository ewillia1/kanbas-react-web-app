import { Link, useLocation, useParams } from "react-router-dom";
import { FaRegUserCircle, FaTachometerAlt, FaBook, FaRegCalendarAlt, FaRegEnvelope, FaRegClock, FaRegCaretSquareRight, FaRegArrowAltCircleRight, FaRegQuestionCircle } from "react-icons/fa";
import "./index.css";
import { courses } from "../../Database";

function CourseNavigation() {
    const links = [ "Home", "Modules", "Piazza", "Grades", "Assignments", "Quizzes", "People", 
                    "Panopto Video","Discussions","Announcements", "Pages", "Files", "Rubrics",
                    "Outcomes","Collaborations", "Syllabus", "Settings"];
    const { pathname } = useLocation();
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);

    return(
        <div className="col-md-1 col-lg-1 col-xl-1 d-none d-md-block p-0">
            <div className="wd-course-nav sticky-top" style={{paddingLeft: "4vw"}}>
                <ul id="courseNav" className="wd-navigation">
                    <li className="wd-nowrap">{course?.startDate} {course?.name}</li>
                    {links.map((link, index) => (
                        <li key={index} className={pathname.includes(link) ? "wd-active wd-nowrap" : "wd-nowrap"}>
                            <Link to={link}>{link}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default CourseNavigation