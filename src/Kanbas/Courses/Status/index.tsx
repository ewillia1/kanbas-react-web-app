import { FaBan, FaBell, FaBullhorn, FaCalendarCheck, FaCalendarDay, FaChartBar, FaCheckCircle, FaFileImport, FaRegArrowAltCircleRight, FaRegDotCircle } from "react-icons/fa";
import "./index.css";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { courses } from "../../Database";

function Status() {
    const [isUnpubBtnDisabled, setUnpubBtn] = useState(false);
    const [isPubBtnDisabled, setPubBtn] = useState(false);
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    
    // Function to change color and enable/disable unpublish and pubish buttons depending on which one is clicked.
    function changePublish(str: string) {
        let unpub_element= document.getElementById("unpublishbtn");
        let pub_element = document.getElementById("publishbtn");

        if (str.localeCompare("unpub")) {
            if (unpub_element!== null && pub_element !== null) {
                pub_element.classList.toggle("wd-enabled-btn");
                unpub_element.classList.remove("wd-enabled-btn");
                setPubBtn(true);
                setUnpubBtn(false);
            }
        } else {
            if (unpub_element!== null && pub_element !== null) {
                pub_element.classList.remove("wd-enabled-btn");
                unpub_element.classList.toggle("wd-enabled-btn");
                setPubBtn(false);
                setUnpubBtn(true);
            }
        }
    }

    return(
        <>
            <h3>Course Status</h3>

            <div className="d-grid gap-1 d-md-flex mx-auto">
                <button id="unpublishbtn" className="wd-course-status-button" type="button" disabled={isUnpubBtnDisabled} onClick={() => changePublish("unpub")}><FaBan /> Unpublish</button>
                <button id="publishbtn" className="wd-course-status-button" type="button" disabled={isPubBtnDisabled} onClick={() => changePublish("pub")}><FaCheckCircle /> Published</button>
            </div>

            <p></p>

            <div className="d-grid gap-1 mx-auto">
                <button className="wd-course-status-button" type="button"><FaFileImport /> Import Existing Content</button>
                <button className="wd-course-status-button" type="button"><FaRegArrowAltCircleRight /> Import From Commons</button>
                <button className="wd-course-status-button" type="button"><FaRegDotCircle /> Choose Home Page</button>
                <button className="wd-course-status-button" type="button"><FaChartBar /> View Course Stream</button>
                <button className="wd-course-status-button" type="button"><FaBullhorn /> New Announcement</button>
                <button className="wd-course-status-button" type="button"><FaChartBar /> New Analytics</button>
                <button className="wd-course-status-button" type="button"><FaBell /> View Course Notifications</button>
            </div>

            <p></p>

            <div className="row">
                <div className="col">
                    <h3>To Do</h3>
                </div>
            </div>
            <div className="row"><hr/></div>
            <div className="row wd-coming-up-todo-row">
                <Link to={`/Kanbas/Courses/${course?.name}/Grades`} className="wd-hyperlinks"><FaCalendarCheck /> Grade A1 - ENV + HTML</Link>
                <p className="wd-subheader-to-do">100 points • Sep 18 at 11:59pm</p>
            </div>

            <p></p>

            <div className="row">
                <div className="col">
                    <h3>Coming Up</h3>
                </div>
                <div className="col">
                    <h6>
                        <Link to={`/Kanbas/Calendar`} className="wd-hyperlinks"><FaCalendarDay /> View Calendar</Link>          
                    </h6>
                </div>
            </div>
            <div className="row"><hr/></div>
            <div className="row wd-coming-up-todo-row">
                <Link to={`/Kanbas/Calendar`} className="wd-hyperlinks"><FaCalendarDay />Lecture</Link>
                <p className="wd-subheader-coming-up">CS4500.12631.202410 Sep 11 at 11:45am</p>
            </div>
            <div className="row wd-coming-up-todo-row">
                <Link to={`/Kanbas/Calendar`} className="wd-hyperlinks"><FaCalendarDay />CS5610 06 SP23 Lecture</Link>
                <p className="wd-subheader-coming-up">CS4500.12631.202410 Sep 11 at 6pm</p>
            </div>
            <div className="row wd-coming-up-todo-row">
            <Link to={`/Kanbas/Calendar`} className="wd-hyperlinks"><FaCalendarDay />CS5610 Web Development Summer 1 2023 Lecture</Link>
                <p className="wd-subheader-coming-up">CS4500.12631.202410 Sep 11 at 7pm</p>
            </div>
        </>
    );
}
export default Status