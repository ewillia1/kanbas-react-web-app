import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { CourseType } from "../../Util";
import { useState, useEffect } from "react";
import axios from "axios";

function GetBreadcrumb() {
    const { courseId } = useParams();
    const COURSES_API = "http://localhost:4000/api/courses";
    const [course, setCourse] = useState<CourseType>({
        _id: "", name: "", number: "", semester: "",
        startDate: "", endDate: "", image: "" 
    });
    
    const findCourseById = async (courseId?: string) => {
        const response = await axios.get(
        `${COURSES_API}/${courseId}`
        );
        setCourse(response.data);
    };

    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);    

    let currentURL = (document.URL);
    let webPage = currentURL.split("/");
    let pageName = webPage[webPage.length - 1];

    if (!pageName.localeCompare("Panopto%20Video")) {
        pageName = "Panopto Video";
    }

    if (!pageName.localeCompare("Zoom%20Meetings")) {
        pageName = "Zoom Meetings";
    }

    if (!pageName.localeCompare("Progress%20Reports%20(EAB%20Navigate)")) {
        pageName = "Progress Reports (EAB Navigate)";
    }

    let secondToLast = webPage[webPage.length - 2];
    let inAssignments = false;
    if (!secondToLast.localeCompare("Assignments")) {
        inAssignments = true;
    }
    
    return(
        <nav aria-label="breadcrumb" style={{paddingTop: "14px"}}>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link className="wd-breadcrumb-link" to={`/Kanbas/Courses/${course?._id}/Home`}>{course?.number} {course?.name}</Link></li>
                    { inAssignments && <li className="breadcrumb-item"><Link className="wd-breadcrumb-link" to={`/Kanbas/Courses/${course?._id}/Assignments`}>Assignments</Link></li> }
                <li className="breadcrumb-item active" aria-current="page">{pageName}</li>
            </ol>
        </nav>
    );
}
export default GetBreadcrumb