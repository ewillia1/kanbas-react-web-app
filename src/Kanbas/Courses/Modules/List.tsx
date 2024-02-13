import React, { useEffect, useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaRegCheckCircle, FaPlus, FaCaretDown, FaAngleRight, FaCaretRight } from "react-icons/fa";
import { useParams } from "react-router";
import { RxDragHandleDots2 } from "react-icons/rx";

function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);

    return (
        <>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" className="wd-rounded-corners-all-around wd-home-button wd-margin-5px">Collapse All</button>
                <button type="button" className="wd-rounded-corners-all-around wd-home-button wd-margin-5px">View Progress</button>
                <div className="btn-group">
                    <button className="btn btn-secondary dropdown-toggle wd-course-status-dropdown" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"><FaRegCheckCircle className="wd-green-icon" /> Publish All</button>
                    <ul className="dropdown-menu dropdown-menu-end wd-publish-all-btn" aria-labelledby="dropdownMenuButton2">
                        <li><a className="dropdown-item" href="#"><FaCheckCircle className="wd-green-icon" /> Publish all modules and items</a></li>
                        <li><a className="dropdown-item" href="#"><FaCheckCircle className="wd-green-icon" /> Publish modules only</a></li>
                        <li><a className="dropdown-item" href="#"><FaCheckCircle className="wd-green-icon" /> Unpublish all modules and items</a></li>
                    </ul>
                </div>
                <button type="button" className="wd-rounded-corners-all-around wd-home-button wd-module-plus"><FaPlus /> Module</button>
                <button type="button" className="wd-rounded-corners-all-around wd-home-button wd-margin-5px"><FaEllipsisV /></button>
            </div>
            <hr/>

            <ul className="list-group wd-modules">
                {modulesList.map((module) => (
                    <li key={module._id} className="list-group-item" onClick={() => setSelectedModule(module)}>
                        <div>
                            <RxDragHandleDots2 className="me-2" />

                            {selectedModule._id === module._id ? <FaCaretDown style={{paddingRight: "5px"}}/> : <FaCaretRight style={{paddingRight: "5px"}}/>} {module.name}
                            
                            <span className="float-end">
                                <FaCheckCircle className="text-success" />
                                <FaCaretDown style={{paddingLeft: "5px"}} />
                                <FaPlusCircle className="ms-2" />
                                <FaEllipsisV className="ms-2" />
                            </span>
                        </div>

                        {selectedModule._id === module._id && (
                            <ul className="list-group">
                                {module.lessons?.map((lesson) => (
                                <li key={lesson._id} className="list-group-item">
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