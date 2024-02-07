import { Link, useLocation } from "react-router-dom";
import { FaHome, FaRegCircle, FaPlug, FaRocket, FaBars, FaUserFriends, FaComments, FaBullhorn, FaClipboardList, FaBullseye, FaCog, FaGlasses, FaBook, FaFolder, FaRegUserCircle, FaTachometerAlt, FaRegCalendarAlt, FaRegEnvelope, FaRegClock, FaRegCaretSquareRight, FaRegArrowAltCircleRight, FaRegQuestionCircle } from "react-icons/fa";
import React from "react";
import "./index.css";

function BlackHeader() {
    const links = [
        { label: "Home", icon: <FaHome className="fs-2 wd-react-icon" /> },
        { label: "Modules", icon: <FaRegCircle className="fs-2" /> },
        { label: "Piazza", icon: <FaPlug className="fs-2 wd-react-icon" /> },
        { label: "Zoom Meetings", icon: <FaPlug className="fs-2 wd-react-icon" /> },
        { label: "Assignments", icon: <FaBook className="fs-2 wd-react-icon" /> },
        { label: "Quizzes", icon: <FaRocket className="fs-2 wd-react-icon" /> },
        { label: "Grades", icon: <FaBook className="fs-2 wd-react-icon" /> },
        { label: "People", icon: <FaUserFriends className="fs-2 wd-react-icon" /> },
        { label: "Panopto Video", icon: <FaPlug className="fs-2 wd-react-icon" /> },
        { label: "Discussions", icon: <FaComments className="fs-2 wd-react-icon" /> },
        { label: "Announcements", icon: <FaBullhorn className="fs-2 wd-react-icon" /> },
        { label: "Pages", icon: <FaBook className="fs-2 wd-react-icon" /> },
        { label: "Files", icon: <FaFolder className="fs-2 wd-react-icon" /> },
        { label: "Rubrics", icon: <FaClipboardList className="fs-2 wd-react-icon" /> },
        { label: "Outcomes", icon: <FaBullseye className="fs-2 wd-react-icon" /> },
        { label: "Collaborations", icon: <FaRegCircle className="fs-2 wd-react-icon" /> },
        { label: "Syllabus", icon: <FaBook className="fs-2 wd-react-icon" /> },
        { label: "Progress Reports (EAB Navigate)", icon: <FaPlug className="fs-2 wd-react-icon" /> },
        { label: "Settings", icon: <FaCog className="fs-2 wd-react-icon" /> },
    ];

    const links1 = [
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 wd-react-icon" /> },
        { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
        { label: "Courses", icon: <FaBook className="fs-2 wd-react-icon" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2 wd-react-icon" /> },
        { label: "Inbox", icon: <FaRegEnvelope className="fs-2 wd-react-icon" /> },
        { label: "Studio", icon: <FaRegCaretSquareRight className="fs-2 wd-react-icon" /> },
        { label: "Commons", icon: <FaRegArrowAltCircleRight className="fs-2 wd-react-icon" /> },
        { label: "History", icon: <FaRegClock className="fs-2 wd-react-icon" /> },
        { label: "Help", icon: <FaRegQuestionCircle className="fs-2 wd-react-icon" /> },
    ];
    
    const { pathname } = useLocation();

    return(
        <div className="d-block d-sm-none wd-0-lr-padding">
            <nav className="navbar sticky-top wd-black-navbar" aria-label="Small site nav bar">
                <div className="container-fluid" data-bs-toggle="modal" data-bs-target="#kanbasModal">
                    <button className="wd-small-navbar"><FaBars /></button>
                    <p className="wd-centered-text">Dashboard</p>
                    <button className="wd-small-navbar"><FaGlasses /></button>
                    <a className="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                    <ul className="dropdown-menu dropdown-menu-end wd-dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        {links.map((link, index) => (
                            <li key={index} className="wd-navigation-link dropdown-item">
                                <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <div className="modal fade" id="kanbasModal" aria-labelledby="kanbasModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content wd-content-nav">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className="wd-no-bullets">
                                {links1.map((link, index) => (
                                    <li key={index} className="wd-navigation-link dropdown-item">
                                        <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BlackHeader