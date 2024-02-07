import { HiMiniBars3 } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import { courses } from "../../Database";
import "./index.css";

function Breadcrumb() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    
    return(
        <div className="row d-none d-md-block" style={{padding: "0"}}>
            <div className="col-12" style={{paddingLeft: "4vw"}}>
                <div className="row m-0">
                    <nav className="navbar wd-breadcrumb-navbar" aria-label="Small site nav bar">
                        <div className="container-fluid">
                            <button className="wd-three-bar-menu"><HiMiniBars3 /></button>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link className="wd-breadcrumb-link" to={`/Kanbas/Courses/${course?._id}/Home`}>{course?.number} {course?.name}</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Modules</li>
                                </ol>
                            </nav>
                            <button className="wd-rounded-corners-all-around wd-home-button">
                                <i className="fa-solid fa-glasses"></i> Student View
                            </button>
                        </div>
                    </nav>
                </div>
                <hr/>
            </div>
        </div>
    );
}
export default Breadcrumb