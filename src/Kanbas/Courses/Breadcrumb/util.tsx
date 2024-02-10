import { useParams } from "react-router";
import { courses } from "../../Database";
import { Link } from "react-router-dom";

function GetBreadcrumb() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);

    let currentURL = (document.URL);
    let webPage = currentURL.split("/");
    let pageName = webPage[webPage.length - 1];

    if (!pageName.localeCompare("Panopto%20Video")) {
        pageName = "Panopto Video";
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