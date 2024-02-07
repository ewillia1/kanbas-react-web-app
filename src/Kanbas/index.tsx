import KanbasNavigation from "./Navigation"
import "../Kanbas/Courses/Home/index.css";
import "../Kanbas/Dashboard/index.css";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";

function Kanbas() {
    return(
        <div className="container-fluid wd-main-container">
            <div className="row wd-main-row">
                <div className="col-md-1 col-lg-1 col-xl-1 d-none d-md-block">
                    <KanbasNavigation/>
                </div>
                <div className="col-12 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={<Dashboard />} />
                        <Route path="Courses/:courseId/*" element={<Courses />} />
                        <Route path="Calendar" element={<h1>Calendar</h1>} />
                        <Route path="Inbox" element={<h1>Inbox</h1>} />
                        <Route path="History" element={<h1>History</h1>} />
                        <Route path="Studio" element={<h1>Studio</h1>} />
                        <Route path="Commons" element={<h1>Commons</h1>} />
                        <Route path="Help" element={<h1>Help</h1>} />
                    </Routes>
                </div>
            </div>
        </div> 
    );
}
export default Kanbas