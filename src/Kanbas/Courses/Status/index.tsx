import { FaBan, FaBell, FaBullhorn, FaCalendarCheck, FaCalendarDay, FaChartBar, FaCheckCircle, FaFileImport, FaRegArrowAltCircleRight, FaRegDotCircle } from "react-icons/fa";

function Status() {
    return(
        <>
            <h3>Course Status</h3>
            <div className="list-group list-group-horizontal">
                <a href="#" className="list-group-item list-group-item-action w-100 wd-course-status-button"><FaBan /> Unpublish</a>
                <a href="#" className="list-group-item list-group-item-action w-100 wd-course-status-button"><FaCheckCircle /> Published</a>
            </div>

            <p></p>

            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action wd-course-status-button"><FaFileImport /> Import Existing Content</a>
                <a href="#" className="list-group-item list-group-item-action wd-course-status-button"><FaRegArrowAltCircleRight /> Import From Commons</a>
                <a href="#" className="list-group-item list-group-item-action wd-course-status-button"><FaRegDotCircle /> Choose Home Page</a>
                <a href="#" className="list-group-item list-group-item-action wd-course-status-button"><FaChartBar /> View Course Stream</a>
                <a href="#" className="list-group-item list-group-item-action wd-course-status-button"><FaBullhorn /> New Announcement</a>
                <a href="#" className="list-group-item list-group-item-action wd-course-status-button"><FaChartBar /> New Analytics</a>
                <a href="#" className="list-group-item list-group-item-action wd-course-status-button"><FaBell /> View Course Notifications</a>
            </div>

            <p></p>

            <div className="row">
                <div className="col">
                    <h3>To Do</h3>
                </div>
            </div>
            <div className="row"><hr/></div>
            <div className="row wd-coming-up-todo-row">
                <a className="wd-hyperlinks" href="/Kanbas/Courses/Assignments/Edit/screen.html"><FaCalendarCheck /> Grade A1 - ENV + HTML</a>
                <p className="wd-subheader-to-do">100 points • Sep 18 at 11:59pm</p>
            </div>

            <p></p>

            <div className="row">
                <div className="col">
                    <h3>Coming Up</h3>
                </div>
                <div className="col">
                    <h6>
                        <a className="wd-hyperlinks" href="/Kanbas/Calendar/index.html"><FaCalendarDay /> View Calendar</a>
                    </h6>
                </div>
            </div>
            <div className="row"><hr/></div>
            <div className="row wd-coming-up-todo-row">
                <a className="wd-hyperlinks" href="#"><FaCalendarDay />Lecture</a>
                <p className="wd-subheader-coming-up">CS4500.12631.202410 Sep 11 at 11:45am</p>
            </div>
            <div className="row wd-coming-up-todo-row">
                <a className="wd-hyperlinks" href="#"><FaCalendarDay />CS5610 06 SP23 Lecture</a>
                <p className="wd-subheader-coming-up">CS4500.12631.202410 Sep 11 at 6pm</p>
            </div>
            <div className="row wd-coming-up-todo-row">
                <a className="wd-hyperlinks" href="#"><FaCalendarDay />CS5610 Web Development Summer 1 2023 Lecture</a>
                <p className="wd-subheader-coming-up">CS4500.12631.202410 Sep 11 at 7pm</p>
            </div>
        </>
    );
}
export default Status