import { FaCaretDown, FaCheckCircle, FaEllipsisV, FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./index.css";
import { TbFilePencil } from "react-icons/tb";
import { RxDragHandleDots2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, selectAssignment } from "./assignmentsReducer";        // Import reducer functions to add, delete, and update assignments.
import { AssignmentType, KanbasState } from "../../store";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";

function Assignments() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const assignmentList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);  // Retrieve current state variables assignments from reducer.
    const [toBeDeleted, setToBeDeleted] = useState<AssignmentType | undefined>();
    const dispatch = useDispatch();             // Get dispatch to call reducer functions.
    const [show, setShow] = useState(false);

    function handleCloseYes(assignment: AssignmentType  | undefined) {
        console.log("In handleCloseYes");
        console.log("assignment being deleted = " + JSON.stringify(assignment));
        dispatch(deleteAssignment(assignment?._id));
        setShow(false);
    }

    function handleCloseNo() {
        console.log("In handleCloseNo");
        setShow(false);
    }

    function handleShow(assignment: AssignmentType) {
        setToBeDeleted(assignment);
        console.log(toBeDeleted);
        console.log("In handleShow");
        setShow(true);
    };
  
    function handleAddAssign() {
        console.log("In handleAddAssign");
        navigate(`/Kanbas/Courses/${courseId}/Assignments/Editor`);
    }

    return (
        <>
            <div>
                <div className="form-outline w-25 float-start" data-mdb-input-init>
                    <input type="search" id="form1" className="form-control wd-nowrap mt-1" placeholder="Search for Assignment" title="Input search item."/>
                </div>

                <div className="float-end">
                    <button type="button" className="btn btn-light btn-outline-dark"><FaPlus /> Group</button>
                    <button type="button" className="btn btn-light btn-outline-dark wd-add-assignment" onClick={handleAddAssign} id="AddAssignmentBtn"><FaPlus /> Assignment</button>
                    <button type="button" className="btn btn-light btn-outline-dark"><FaEllipsisV /></button>
                </div>
                <div className="wd-float-done"></div>
            </div>
            <hr/>

            <ul className="list-group wd-assignmentSection">
                <li className="list-group-item" draggable="true">
                    <div style={{marginBottom: "15px", cursor: "pointer"}}>
                        <RxDragHandleDots2 className="me-2" />
                        <FaCaretDown style={{paddingRight: "5px"}} /> ASSIGNMENTS
                        <span className="float-end">
                            <span className="wd-percentage-label">100% of Total</span>
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" onClick={handleAddAssign}  id="PlusAssignmentBtn" />
                            <FaEllipsisV className="ms-2" />
                        </span>
                    </div>

                    <ul className="list-group">
                        {assignmentList.filter((assignment) => assignment.course === courseId).map((assignment) => (
                            <li key={assignment._id} className="list-group-item wd-assignment" onClick={() => selectAssignment(assignment)} draggable="true">
                                <RxDragHandleDots2 className="me-2" /><TbFilePencil className="wd-pencil-paper " />
                                <span className="float-end">
                                    <button className="btn btn-danger me-1" style={{borderRadius: "6px"}} onClick={() => handleShow(assignment)}>Delete</button> {/* Wrap reducer functions with dispatch. */}

                                    <Modal show={show} backdrop="static" aria-labelledby="contained-modal-title-vcenter" centered onHide={() => handleCloseNo()}>
                                        <Modal.Header closeButton>
                                            Deleting an Assignment
                                        </Modal.Header>
                                        <Modal.Body>
                                            Are you sure that you want to delete assignment: {toBeDeleted?.title}?
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={() => handleCloseNo()}>
                                                No
                                            </Button>
                                            <Button variant="primary" onClick={() => handleCloseYes(toBeDeleted)}>
                                                Yes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>

                                    <FaCheckCircle className="text-success" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} id="OpenAssignment">
                                    <b>{assignment.title}</b><br/>
                                    <span className="wd-week-span">{assignment.subtitle}  Module |</span><br/>
                                    <span className="wd-week-span"><b>Due: </b>{assignment.dueDate} | {assignment.points} pts</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;