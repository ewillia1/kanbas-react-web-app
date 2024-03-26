import { useNavigate, useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import "./index.css";
import { addAssignment, selectAssignment, updateAssignment, selectAssignments } from "../assignmentsReducer";        // Import reducer functions to add, delete, and update assignments.
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
import { useEffect } from "react";
import * as client from "./../client";

function AssignmentEditor() {
    const { courseId } = useParams();
    const { assignmentId } = useParams();
    console.log("assignmentId = " + assignmentId);
    const assignmentList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);  // Retrieve current state variables modules and module from reducer.
    const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
    console.log("assignment = " + JSON.stringify(assignment));
    
    const dispatch = useDispatch();             // Get dispatch to call reducer functions.
    const navigate = useNavigate();
    
    // If user is coming from clicking add assignment, set values to default values.
    // Else the user is coming from clicking an old assignment, so set values to the values of the assignment clicked.
    // Only run the effect on the initial render.
    useEffect(() => {
        // Runs only on the first render.
        if ( assignmentId !== undefined ) {
            if (assignmentId.localeCompare("Editor") === 0) {
                dispatch(selectAssignment({ 
                    _id: "", title: "New Title", subtitle: "New Subtitle", 
                    description: "New Assignment Description", dueDate: "2024-09-19", 
                    availableFromDate: "2024-09-24", untilDate: "2024-12-01", points: "100"
                }));
            } else {
                const a = assignmentList.find((assignment) => assignment._id === assignmentId);
                dispatch(selectAssignment(a));
            }
        }
    }, []);

    const handleUpdateAssignment = async () => {
        try {
            const status = await client.updateAssignment(assignment);
            dispatch(updateAssignment(assignment));
        } catch (error: any) {
            console.log("handleUpdateAssignment error = " + error);  
        }
    };
    
    function handleSave() {
        if (assignmentId !== undefined) {
            if (assignmentId.localeCompare("Editor") === 0) {
                dispatch(addAssignment({ ...assignment, course: courseId }));
            } else {
                handleUpdateAssignment();
                handleUpdateAssignment();
            }
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    }

    function handleCancel() {
        dispatch(selectAssignment({ 
            _id: "", title: "New Title", subtitle: "New Subtitle", 
            description: "New Assignment Description", dueDate: "2024-09-19", 
            availableFromDate: "2024-09-24", untilDate: "2024-12-01", points: "100"
        }));
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    }

    return (
        <div>
            <button type="button" className="wd-float-right btn btn-light btn-outline-dark mt-1"><FaEllipsisV /></button>
            <span className="wd-float-right wd-green-icon mt-1" style={{paddingRight: "10px"}}><FaCheckCircle /> <b>Published</b></span>
            <div className="wd-float-done"></div>
            <hr/>

            <form>
                <div className="mb-3">
                    <label htmlFor="assignmentName" className="form-label">Assignment Name</label>
                    <input type="text" className="form-control" id="assignmentName" value={assignment?.title} onChange={(e) => dispatch(selectAssignment({ ...assignment, title: e.target.value }))}/>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" id="description" rows={3} value={assignment?.description} onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))}></textarea>
                </div>

                <div className="wd-bottom-section">
                    <div className="row mb-3">
                        <label htmlFor="points" className="col-sm-4 col-form-label wd-assign-edit-label">Points</label>
                        <div className="col-sm-8">
                            <input type="number" min="0" className="form-control" id="points" value={assignment?.points} onChange={(e) => dispatch(selectAssignment({ ...assignment, points: e.target.value }))}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="assignmentGroup" className="col-sm-4 col-form-label wd-assign-edit-label">Assignment Group</label>
                        <div className="col-sm-8">
                            <select className="form-select" id="assignmentGroup" name="assignmentGroup">
                                <option>ASSIGNMENTS</option>
                                <option>QUIZZES</option>
                                <option>EXAMS</option>
                                <option>PROJECTS</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="displayGrade" className="col-sm-4 col-form-label wd-assign-edit-label">Display Grade as</label>
                        <div className="col-sm-8">
                            <select className="form-select" id="displayGrade" name="displayGrade">
                                <option>Percentage</option>
                                <option>Dummy 1</option>
                                <option>Dummy 2</option>
                                <option>Dummy 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-12 offset-sm-4">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Do not count this assignment towards the final grade
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="submissionType" className="col-sm-4 col-form-label wd-assign-edit-label">Submission Type</label>
                        <div className="col-sm-8">
                            <select className="form-select" id="submissionType" name="submissionType">
                                <option>Text Entry Box</option>
                                <option>Website URL</option>
                                <option>File Upload</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <p className="col-sm-4 col-form-label wd-assign-edit-label">Online Entry Options</p>
                        <div className="col-sm-8" id="onlineEntryOptions">
                            <input className="form-check-input" type="checkbox" name="check-online-entry-options" id="chkbox-textEntry"/>
                            <label htmlFor="chkbox-textEntry" style={{paddingLeft: "5px"}}>Text Entry</label><br/>
                
                            <input className="form-check-input" type="checkbox" name="check-online-entry-options" id="chkbox-websiteURL"/>
                            <label htmlFor="chkbox-websiteURL" style={{paddingLeft: "5px"}}>Website URL</label><br/>
                
                            <input className="form-check-input" type="checkbox" name="check-online-entry-options" id="chkbox-mediaRec"/>
                            <label htmlFor="chkbox-mediaRec" style={{paddingLeft: "5px"}}>Media Recordings</label><br/>
                
                            <input className="form-check-input" type="checkbox" name="check-online-entry-options" id="chkbox-studentAnno"/>
                            <label htmlFor="chkbox-studentAnno" style={{paddingLeft: "5px"}}>Student Annotation</label><br/>
                
                            <input className="form-check-input" type="checkbox" name="check-online-entry-options" id="chkbox-fileUploads"/>
                            <label htmlFor="chkbox-fileUploads" style={{paddingLeft: "5px"}}>File Uploads</label><br/><br/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <p className="col-sm-4 col-form-label wd-assign-edit-label">Assign</p>
                        <div className="col-sm-8 border wd-border-radius-8px" id="assign">
                            <div className="mb-3">
                                <p className="form-label" style={{paddingTop: "10px"}}>Assign to</p>
                                <div className="container p-3 wd-rounded-corners-all-around wd-assign-to-container" id="assignTo">
                                    <button className="btn btn-light btn-outline-dark">Everyone <span className="float-end ps-5"><i className="fa-solid fa-plus"></i></span></button>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dueDate" className="form-label">Due</label>
                                <input id="dueDate" className="form-control" type="date" value={assignment?.dueDate} onChange={(e) => dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))}/>
                            </div>
                            <div className="row g-2">
                                <div className="col-sm">
                                    <label htmlFor="availableFrom" className="form-label">Available from</label>
                                    <input id="availableFrom" className="form-control" type="date" value={assignment?.availableFromDate} onChange={(e) => dispatch(selectAssignment({ ...assignment, availableFromDate: e.target.value }))}/>
                                </div>
                                <div className="col-sm">
                                    <label htmlFor="untilDate" className="form-label">Until</label>
                                    <input id="untilDate" className="form-control" type="date" value={assignment?.untilDate} onChange={(e) => dispatch(selectAssignment({ ...assignment, untilDate: e.target.value }))}/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <button type="button" className="btn btn-light btn-outline-dark wd-add-button"><i className="fa-solid fa-plus"></i>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck2"/>
                    <label className="form-check-label" htmlFor="gridCheck2">
                        Notify users that this content has changed
                    </label>
                </div>
            </form>

            <button onClick={handleSave} className="btn btn-light btn-outline-dark wd-save-button ms-2 float-end">Save</button>
            <button onClick={handleCancel} className="btn btn-light btn-outline-dark wd-cancel-button float-end">Cancel</button>
            {/* <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light btn-outline-dark wd-cancel-button float-end">Cancel</Link> */}
            <button onClick={handleCancel} className="btn btn-light btn-outline-dark wd-cancel-button float-end">Cancel</button>
            {/* <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light btn-outline-dark wd-cancel-button float-end">Cancel</Link> */}
        </div>
    );
}
export default AssignmentEditor;