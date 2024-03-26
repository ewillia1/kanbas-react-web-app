import { FaEllipsisV } from "react-icons/fa";

function CourseNavigation() {
    const sections = [ "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", 
                    "People", "Panopto Videos" ];

    const hiddenSections = [ "Chat", "SCORM", "Attendance", "Barnes and Noble Bookstore", "Digication", "Top Hat", 
                    "Syllabus", "Perusall", "Microsoft Teams Meetings", "FACT Reporting and Photo Roster", "Progress Reports (Navigate)",
                    "VHL Central", "Gradescope 1.3", "Credentials", "iClicker" ];

    return(
        <>
            <h1>Course Details</h1>

            <p>Drag and drop items to reorder them in the course navigation.</p>

            <ul className="list-group" style={{cursor: "pointer"}}>
                <li id="home" className="list-group-item">Home</li>
                {sections.map((section, index) => (
                    <li key={index} className="list-group-item" style={{paddingLeft: "40px"}}>
                        {section} 
                        <span className="float-end">
                            <FaEllipsisV className="ms-2" />
                        </span>
                    </li>
                ))}
            </ul>

            <p style={{marginTop: "30px"}}>Drag items here to hide them from students.</p>
            <p style={{fontSize: "smaller"}}>Disabling most pages will cause students who visit those pages to be redirected to the course home page.</p>

            <ul className="list-group" style={{cursor: "pointer"}}>
                {hiddenSections.map((section, index) => (
                    <li key={index} className="list-group-item" style={{paddingLeft: "40px"}}>
                        <div className="d-flex justify-content-between">
                            <div>
                                <p>{section}<br/><i style={{fontSize: "12px", paddingLeft: "10px"}}>Page disabled, won't appear in navigation</i></p>
                            </div>
                            <div><FaEllipsisV className="ms-2" /></div>
                        </div>
                    </li>
                ))}
            </ul>

            <button type="submit" className="btn btn-danger" style={{marginTop: "30px"}}>Save</button>
        </>
    );
}
export default CourseNavigation;