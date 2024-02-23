import { FaCaretDown, FaCheckCircle, FaEllipsisV, FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
import { TbFilePencil } from "react-icons/tb";
import { RxDragHandleDots2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, selectAssignment } from "./assignmentsReducer";        // Import reducer functions to add, delete, and update assignments.
import { KanbasState } from "../../store";

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter((assignment) => assignment.course === courseId);

    const moduleList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);  // Retrieve current state variables modules and module from reducer.
    const module = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();             // Get dispatch to call reducer functions.
  
    return (
        <>
            <div>
                <div className="form-outline w-25 float-start" data-mdb-input-init>
                    <input type="search" id="form1" className="form-control wd-nowrap mt-1" placeholder="Search for Assignment" title="Input search item."/>
                </div>

                <div className="float-end">
                    <button type="button" className="btn btn-light btn-outline-dark"><FaPlus /> Group</button>
                    <button type="button" className="btn btn-light btn-outline-dark wd-add-assignment"><FaPlus /> Assignment</button>
                    <button type="button" className="btn btn-light btn-outline-dark"><FaEllipsisV /></button>
                </div>
                <div className="wd-float-done"></div>
            </div>
            <hr/>

            <ul className="list-group wd-assignmentSection">
                <li className="list-group-item">
                    <div style={{marginBottom: "15px", cursor: "pointer"}}>
                        <RxDragHandleDots2 className="me-2" /><FaCaretDown style={{paddingRight: "5px"}} /> ASSIGNMENTS
                        <span className="float-end">
                            <span className="wd-percentage-label">40% of Total</span>
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>

                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li key={assignment._id} className="list-group-item wd-assignment">
                                <RxDragHandleDots2 className="me-2" /><TbFilePencil className="wd-pencil-paper " />
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />
                                </span>
                                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
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