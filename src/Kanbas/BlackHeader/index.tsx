import { Link, useLocation, useParams } from "react-router-dom";
import { FaHome, FaRegCircle, FaPlug, FaRocket, FaBars, FaUserFriends, FaComments, FaBullhorn, FaClipboardList, FaBullseye, FaCog, FaGlasses, FaBook, FaFolder, FaRegUserCircle, FaTachometerAlt, FaRegCalendarAlt, FaRegEnvelope, FaRegClock, FaRegCaretSquareRight, FaRegArrowAltCircleRight, FaRegQuestionCircle, FaEyeSlash, FaAngleRight, FaChevronDown } from "react-icons/fa";
import { MdCancelPresentation } from "react-icons/md";
import React from "react";
import "./index.css";
import { courses } from "../Database";

function BlackHeader() {
    const kanbasNavLinks = [
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 wd-react-icon" />, hidden: <span></span> },
        { label: "Account", icon: <FaRegUserCircle className="fs-2" />, optional: <FaAngleRight className="wd-extra-sections float-end" /> },
        { label: "Courses", icon: <FaBook className="fs-2 wd-react-icon" />, optional: <FaAngleRight className="wd-extra-sections float-end" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2 wd-react-icon" />, hidden: <span></span> },
        { label: "Inbox", icon: <FaRegEnvelope className="fs-2 wd-react-icon" />, hidden: <span></span> },
        { label: "Studio", icon: <FaRegCaretSquareRight className="fs-2 wd-react-icon" />, hidden: <span></span> },
        { label: "Commons", icon: <FaRegArrowAltCircleRight className="fs-2 wd-react-icon" />, hidden: <span></span> },
        { label: "History", icon: <FaRegClock className="fs-2 wd-react-icon" />, optional: <FaAngleRight className="wd-extra-sections float-end" /> },
        { label: "Help", icon: <FaRegQuestionCircle className="fs-2 wd-react-icon" />, optional: <FaAngleRight className="wd-extra-sections float-end" /> },
    ];

    const courseNavLinks = [
        { label: "Home", icon: <FaHome className="fs-2 wd-react-icon" />, hidden: <span></span> },
        { label: "Modules", icon: <FaRegCircle className="fs-2" />, hidden: <span></span> },
        { label: "Piazza", icon: <FaPlug className="fs-2 wd-react-icon" />, hidden: <span></span> },
        { label: "Zoom Meetings", icon: <FaPlug className="fs-2 wd-react-icon" />, hidden: <span></span> },
        { label: "Assignments", icon: <FaBook className="fs-2 wd-react-icon" />, hidden: <span></span> },
        { label: "Quizzes", icon: <FaRocket className="fs-2 wd-react-icon" />, hidden: <span></span> },
        { label: "Grades", icon: <FaBook className="fs-2 wd-react-icon" />, hidden: <span></span> },
        { label: "People", icon: <FaUserFriends className="fs-2 wd-react-icon" />, hidden: <span></span> },
        { label: "Panopto Video", icon: <FaPlug className="fs-2 wd-react-icon" />, hidden: <span></span> },
        { label: "Discussions", icon: <FaComments className="fs-2 wd-react-icon" />, hidden: <FaEyeSlash className="wd-slash-eye" /> },
        { label: "Announcements", icon: <FaBullhorn className="fs-2 wd-react-icon" />, hidden: <FaEyeSlash className="wd-slash-eye" /> },
        { label: "Pages", icon: <FaBook className="fs-2 wd-react-icon" />, hidden: <FaEyeSlash className="wd-slash-eye" /> },
        { label: "Files", icon: <FaFolder className="fs-2 wd-react-icon" />, hidden: <FaEyeSlash className="wd-slash-eye" /> },
        { label: "Rubrics", icon: <FaClipboardList className="fs-2 wd-react-icon" />, hidden: <FaEyeSlash className="wd-slash-eye" /> },
        { label: "Outcomes", icon: <FaBullseye className="fs-2 wd-react-icon" />, hidden: <FaEyeSlash className="wd-slash-eye" /> },
        { label: "Collaborations", icon: <FaRegCircle className="fs-2 wd-react-icon" />, hidden: <FaEyeSlash className="wd-slash-eye" /> },
        { label: "Syllabus", icon: <FaBook className="fs-2 wd-react-icon" />, hidden: <FaEyeSlash className="wd-slash-eye" /> },
        { label: "Progress Reports (EAB Navigate)", icon: <FaPlug className="fs-2 wd-react-icon" />, hidden: <span></span> },
        { label: "Settings", icon: <FaCog className="fs-2 wd-react-icon" />, hidden: <span></span> },
    ];
    
    const { pathname } = useLocation();
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);

    function changeIcon(_x: string) {
        let x= document.getElementById("iconForMiniCourseNav");
        if (x !== null) {
            x.classList.toggle("fa-x")
        }
    }

    return(
        <>
            <nav className="navbar sticky-top wd-black-navbar" aria-label="Small site nav bar">
                <div className="container-fluid">
                    <button className="wd-small-navbar" id="threeBarDropDown" data-bs-toggle="dropdown" aria-expanded="false"><FaBars/></button>
                    <ul className="dropdown-menu dropdown-menu-end wd-dropdown-menu" aria-labelledby="threeBarDropDown">
                        <li><MdCancelPresentation className="fs-2 float-end"/></li>
                        {kanbasNavLinks.map((link, index) => (
                            <li key={index} className="wd-navigation-link dropdown-item" data-bs-dismiss="modal">
                                <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} {link.optional} </Link>
                            </li>
                        ))}
                    </ul>

                    <p className="wd-centered-text">{course?.number} {course?.name}</p>
                    <button className="wd-small-navbar"><FaGlasses /></button>
                    <button className="wd-small-navbar" id="carrotDropdown" data-bs-toggle="dropdown" aria-expanded="false"><i id="iconForMiniCourseNav" onClick={() => changeIcon("1")} className="fa-solid fa-chevron-down"></i></button>
                    <ul className="dropdown-menu dropdown-menu-end wd-dropdown-menu" aria-labelledby="carrotDropdown">
                        {courseNavLinks.map((link, index) => (
                            <li key={index} className="wd-navigation-link dropdown-item">
                                <Link to={`/Kanbas/Courses/${course?._id}/${link.label}`}> {link.icon} {link.label} {link.hidden} </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default BlackHeader