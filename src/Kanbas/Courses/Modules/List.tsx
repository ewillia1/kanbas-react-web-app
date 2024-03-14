import { useEffect, useState } from "react";                        // Import useState to create state variables.
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaRegCheckCircle, FaPlus, FaCaretDown, FaCaretRight } from "react-icons/fa";
import { useParams } from "react-router";
import { RxDragHandleDots2 } from "react-icons/rx";
import { KanbasState } from "../../store";
import { useSelector, useDispatch } from "react-redux";             // Import useSelector and useDispatch.
import { addModule, deleteModule, updateModule, setModule, setModules } from "./modulesReducer";        // Import reducer functions to add, delete, and update modules.
import { LessonType } from "../../Util";
import { findModulesForCourse } from "./client";

function ModuleList() {
    const { courseId } = useParams();
    // const modules = useSelector((state: KanbasState) => state.modulesReducer.modules);  // Retrieve current state variables modules from reducer.

    useEffect(() => {
        findModulesForCourse(courseId).then((modules) => dispatch(setModules(modules)));
    }, [courseId]);
    
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);

    const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);  // Retrieve current state variables modules and module from reducer.
    const module = useSelector((state: KanbasState) => state.modulesReducer.module);
    const dispatch = useDispatch();             // Get dispatch to call reducer functions.

    return (
        <>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" className="btn btn-light btn-outline-dark mt-1">Collapse All</button>
                <button type="button" className="btn btn-light btn-outline-dark mt-1">View Progress</button>
                <div className="btn-group">
                    <button className="btn btn-light btn-outline-dark dropdown-toggle mt-1" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"><FaRegCheckCircle className="wd-green-icon" /> Publish All</button>
                    <ul className="dropdown-menu dropdown-menu-end wd-publish-all-btn" aria-labelledby="dropdownMenuButton2">
                        <li><a className="dropdown-item" href="#"><FaCheckCircle className="wd-green-icon" /> Publish all modules and items</a></li>
                        <li><a className="dropdown-item" href="#"><FaCheckCircle className="wd-green-icon" /> Publish modules only</a></li>
                        <li><a className="dropdown-item" href="#"><FaCheckCircle className="wd-green-icon" /> Unpublish all modules and items</a></li>
                    </ul>
                </div>
                <button type="button" className="btn btn-light btn-outline-dark wd-module-plus mt-1"><FaPlus /> Module</button>
                <button type="button" className="btn btn-light btn-outline-dark mt-1"><FaEllipsisV /></button>
            </div>
            <hr/>

            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <input className="m-2 p-2" style={{borderRadius: "6px", width: "30vw"}} value={module.name} onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}/>        {/* Wrap reducer functions with dispatch. */}
                    <button type="button" className="btn btn-success m-2 p-2 float-end" style={{borderRadius: "6px"}} onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>         {/* Wrap reducer functions with dispatch. */}
                    <button type="button" className="btn btn-primary mt-2 p-2 float-end" style={{borderRadius: "6px"}} onClick={() => dispatch(updateModule(module))}>Update</button>                           {/* Wrap reducer functions with dispatch. */}
                    <textarea className="form-control m-2 p-2" style={{width: "-webkit-fill-available", borderRadius: "6px"}} value={module.description} onChange={(e) => setModule({ ...module, description: e.target.value })}/>   {/* Update module.description for every key stroke. */}
                </li>

                {moduleList.filter((module) => module.course === courseId).map((module) => (
                    <li key={module._id} className="list-group-item" onClick={() => setSelectedModule(module)} draggable="true">
                        <div style={{cursor: "pointer"}}>
                            <RxDragHandleDots2 className="me-2" />

                            {selectedModule._id === module._id ? <FaCaretDown style={{paddingRight: "5px"}}/> : <FaCaretRight style={{paddingRight: "5px"}}/>} {module.name}
                            
                            <span className="float-end">
                                <FaCheckCircle className="text-success" />
                                <FaCaretDown style={{paddingLeft: "5px"}} />
                                <FaPlusCircle className="ms-2" />
                                <FaEllipsisV className="ms-2" />
                                <button className="btn btn-danger" style={{borderRadius: "6px"}} onClick={() => dispatch(deleteModule(module._id))}>Delete</button>                 {/* Wrap reducer functions with dispatch. */}
                                <button className="btn btn-success" style={{borderRadius: "6px", marginLeft: "5px"}} onClick={() => dispatch(setModule(module))}>Edit</button>      {/* Wrap reducer functions with dispatch. */}
                            </span>
                        </div>

                        {selectedModule._id === module._id && (
                            <ul className="list-group" style={{cursor: "pointer"}}>
                                {module.lessons?.map((lesson: LessonType) => (
                                <li key={lesson._id} className="list-group-item" draggable="true">
                                    <RxDragHandleDots2 className="me-2" />{lesson.name}
                                    <span className="float-end">
                                        <FaCheckCircle className="text-success" />
                                        <FaEllipsisV className="ms-2" />
                                    </span>
                                </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ModuleList;