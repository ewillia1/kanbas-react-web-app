import { Link, useLocation } from "react-router-dom";
import { FaRegUserCircle, FaTachometerAlt, FaBook, FaRegCalendarAlt, FaRegEnvelope, FaRegClock, FaRegCaretSquareRight, FaRegArrowAltCircleRight, FaRegQuestionCircle } from "react-icons/fa";
import "./index.css";

function KanbasNavigation() {
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 wd-react-icon" /> },
        { label: "Courses", icon: <FaBook className="fs-2 wd-react-icon" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2 wd-react-icon" /> },
        { label: "Inbox", icon: <FaRegEnvelope className="fs-2 wd-react-icon" /> },
        { label: "History", icon: <FaRegClock className="fs-2 wd-react-icon" /> },
        { label: "Studio", icon: <FaRegCaretSquareRight className="fs-2 wd-react-icon" /> },
        { label: "Commons", icon: <FaRegArrowAltCircleRight className="fs-2 wd-react-icon" /> },
        { label: "Help", icon: <FaRegQuestionCircle className="fs-2 wd-react-icon" /> },
    ];
    const { pathname } = useLocation();

    return (
        <>
            <ul className="wd-kanbas-navigation">
                <li><a href="http://northeastern.edu"><img src="/images/northeastern_logo.png" alt="Northeastern University Logo" width="50"/></a></li>
                {links.map((link, index) => (
                    <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                        <Link to={`/Kanbas/${link.label}`}> {link.icon} <div>{link.label}</div> </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default KanbasNavigation