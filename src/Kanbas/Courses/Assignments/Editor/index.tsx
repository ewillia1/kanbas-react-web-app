import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import "./index.css";
import { useState } from "react";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [assignmentTitle, setAssignmentTitle] = useState(assignment?.title);
    const [assignmentDescription, setAssignmentDescription] = useState(assignment?.subtitle);
    const [assignmentPoints, setAssignmentPoints] = useState(assignment?.points);
    const [assignmentDueDate, setAssignmentDueDate] = useState('2021-01-01');
    const [assignmentAvailableFromDate, setAssignmentAvailableFromDate] = useState('2021-01-01');
    const [assignmentUntilDate, setAssignmentUntilDate] = useState('2021-01-01');

    let clickedAtLeastOneCheckbox = false;

    function handleSave() {
        console.log("in handleSave");
        if (clickedAtLeastOneCheckbox) {
            console.log("Actually saving assignment TBD in later assignments");
            navigate(`/Kanbas/Courses/${courseId}/Assignments`);
        } else {
            alert("Please check at least one Online Entry Options.");
        }
    }

    // Check to make sure that at least one Online Entry Options checkbox is checked.
    $(function(){
        var requiredCheckboxes = $('input:checkbox[required]');
        requiredCheckboxes.on('change',function(){
            if($('input:checkbox[type=checkbox]').is(":checked") == true) {
                requiredCheckboxes.removeAttr('required');
                console.log("if");
                clickedAtLeastOneCheckbox = true;
            } else {
                requiredCheckboxes.attr('required', 'required');
                console.log("else");
                clickedAtLeastOneCheckbox = false;
            }
        });
    });

    return (
        <div>
            <button type="button" className="wd-float-right wd-rounded-corners-all-around wd-home-button wd-margin-5px"><FaEllipsisV /></button>
            <span className="wd-float-right wd-green-icon" style={{paddingRight: "10px"}}><FaCheckCircle /> <b>Published</b></span>
            <div className="wd-float-done"></div>
            <hr/>

            <form>
                <div className="mb-3">
                    <label htmlFor="assignmentName" className="form-label">Assignment Name</label>
                    <input type="text" className="form-control" id="assignmentName" value={assignmentTitle} onChange={e => setAssignmentTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" id="description" rows={3} value={assignmentDescription} onChange={e => setAssignmentDescription(e.target.value)}></textarea>
                </div>

                <div className="wd-bottom-section">
                    <div className="row mb-3">
                        <label htmlFor="points" className="col-sm-4 col-form-label wd-assign-edit-label">Points</label>
                        <div className="col-sm-8">
                            <input type="number" min="0" className="form-control" id="points" value={assignmentPoints} onChange={e => setAssignmentPoints(e.target.value)}/>
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
                            <input className="form-check-input" type="checkbox" name="check-online-entry-options" id="chkbox-textEntry" required/>
                            <label htmlFor="chkbox-textEntry" style={{paddingLeft: "5px"}}>Text Entry</label><br/>
                
                            <input className="form-check-input" type="checkbox" name="check-online-entry-options" id="chkbox-websiteURL" required/>
                            <label htmlFor="chkbox-websiteURL" style={{paddingLeft: "5px"}}>Website URL</label><br/>
                
                            <input className="form-check-input" type="checkbox" name="check-online-entry-options" id="chkbox-mediaRec" required/>
                            <label htmlFor="chkbox-mediaRec" style={{paddingLeft: "5px"}}>Media Recordings</label><br/>
                
                            <input className="form-check-input" type="checkbox" name="check-online-entry-options" id="chkbox-studentAnno" required/>
                            <label htmlFor="chkbox-studentAnno" style={{paddingLeft: "5px"}}>Student Annotation</label><br/>
                
                            <input className="form-check-input" type="checkbox" name="check-online-entry-options" id="chkbox-fileUploads" required/>
                            <label htmlFor="chkbox-fileUploads" style={{paddingLeft: "5px"}}>File Uploads</label><br/><br/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <p className="col-sm-4 col-form-label wd-assign-edit-label">Assign</p>
                        <div className="col-sm-8 border wd-border-radius-8px" id="assign">
                            <div className="mb-3">
                                <p className="form-label" style={{paddingTop: "10px"}}>Assign to</p>
                                <div className="container p-3 wd-rounded-corners-all-around wd-assign-to-container" id="assignTo">
                                    <button className="wd-rounded-corners-all-around">Everyone <span className="float-end ps-5"><i className="fa-solid fa-plus"></i></span></button>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dueDate" className="form-label">Due</label>
                                <input id="dueDate" className="form-control" type="date" value={assignmentDueDate} onChange={e => setAssignmentDueDate(e.target.value)}/>
                            </div>
                            <div className="row g-2">
                                <div className="col-sm">
                                    <label htmlFor="availableFrom" className="form-label">Available from</label>
                                    <input id="availableFrom" className="form-control" type="date" value={assignmentAvailableFromDate} onChange={e => setAssignmentAvailableFromDate(e.target.value)}/>
                                </div>
                                <div className="col-sm">
                                    <label htmlFor="untilDate" className="form-label">Until</label>
                                    <input id="untilDate" className="form-control" type="date" value={assignmentUntilDate} onChange={e => setAssignmentUntilDate(e.target.value)}/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <button type="button" className="btn wd-add-button"><i className="fa-solid fa-plus"></i>Add</button>
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

            <button onClick={handleSave} className="wd-rounded-corners-all-around wd-save-button ms-2 float-end">Save</button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="wd-rounded-corners-all-around wd-cancel-button float-end">Cancel</Link>
        </div>
    );
}
export default AssignmentEditor