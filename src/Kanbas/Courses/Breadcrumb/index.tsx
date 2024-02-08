import { HiMiniBars3 } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import { courses } from "../../Database";
import "./index.css";
import CourseNavigation from "../Navigation";

function Breadcrumb() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);

    let currentURL = (document.URL);
    let webPage = currentURL.split("/");
    let pageName = webPage[webPage.length - 1];

    if (!pageName.localeCompare("Panopto%20Video")) {
        pageName = "Panopto Video";
    }

    function enableCourseNav() {
        let x = document.getElementById("courseNav");
        console.log("clicked course nav menu button");
        console.log(x);
        if (x === null) {
            console.log("x is null");
        } else {
            console.log(x);

            if (x.style.display === "none") {
                x.style.display = "block";
                console.log("x appears");
            } else {
                x.style.display = "none";
                console.log("x goes away");
            }
        }
    }
    
    return(
        <div className="row d-none d-md-block" style={{padding: "0"}}>
            <div className="col-12" style={{paddingLeft: "4vw"}}>
                <div className="row m-0">
                    <nav className="navbar wd-breadcrumb-navbar" aria-label="Small site nav bar">
                        <div className="container-fluid">
                            <button className="wd-three-bar-menu" onClick={() => enableCourseNav()}><HiMiniBars3 /></button>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link className="wd-breadcrumb-link" to={`/Kanbas/Courses/${course?._id}/Home`}>{course?.number} {course?.name}</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{pageName}</li>
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