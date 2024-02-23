import { HiMiniBars3 } from "react-icons/hi2";
import "./index.css";
import GetBreadcrumb from "./util";
import { CourseType } from "../../Util";

type BreadCrumbProp = {
    courses: CourseType[]
};

function Breadcrumb({ courses }: BreadCrumbProp) {
    function enableCourseNav() {
        let x = document.getElementById("courseNav");
        console.log("clicked course nav menu button");
        console.log(x);
        if (x === null) {
            console.log("x is null");
        } else if (x.style.display === "none") {
            x.style.display = "block";
            console.log("courseNav appears");
        } else {
            x.style.display = "none";
            console.log("courseNav goes away");
        }
    }
    
    return(
        <div className="row d-none d-md-block" style={{padding: "0"}}>
            <div className="col-12" style={{paddingLeft: "4vw"}}>
                <div className="row m-0">
                    <nav className="navbar wd-breadcrumb-navbar" aria-label="Small site nav bar">
                        <div className="container-fluid">
                            <button className="wd-three-bar-menu" onClick={() => enableCourseNav()}><HiMiniBars3 /></button>
                            <GetBreadcrumb courses={courses}/>
                            <button className="btn btn-light btn-outline-dark" style={{marginTop: "14px"}}>
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