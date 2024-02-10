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
    
    // const [icon, setIcon] = useState(false);
    // useEffect(() => {
        // console.log("icon = " + icon);
        // if (icon) {
        //     setIcon(false);
        // } else {
        //     setIcon(true);
        // }

        // let _iconID = selectedModule.id_icon;
        // if (typeof(_iconID) === 'string') {
        //     let x = document.getElementById(_iconID);
        //     if (x != null) {
        //         x.classList.toggle("fa-caret-down");
        //     }
        // }
        
    // }, [selectedModule]);

    // function changeModuleIcon(module: React.SetStateAction<{ _id: string; name: string; description: string; course: string; id_icon: string; lessons: { _id: string; name: string; description: string; module: string; }[]; } | { _id: string; name: string; description: string; course: string; id_icon?: undefined; lessons?: undefined; } | { _id: string; name: string; description: string; course: string; lessons: { _id: string; name: string; description: string; module: string; }[]; id_icon?: undefined; }>, _iconID: string | undefined) {
    //     setSelectedModule(module);

    //     if (typeof(_iconID) === 'string') {
    //         let x = document.getElementById(_iconID);
    //         if (x !== null) {
    //             x.classList.toggle("fa-caret-down");
    //         }
    //     }
    // }

    function RightCaret() {
        return <FaCaretRight style={{paddingRight: "5px"}}/>;
    }
      
    function DownCaret() {
        return <FaCaretDown style={{paddingRight: "5px"}}/>;
    }

    // function ChangeModuleIcon(conditionSt: boolean) {
    //     if (conditionSt) {
    //         return <DownCaret/>;
    //     } else {
    //         return <RightCaret/>;
    //     }
    // }

    // let x = false;

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
                    // <li key={module._id} className="list-group-item" onClick={() => changeModuleIcon(module, module.id_icon)}>
                    <li key={module._id} className="list-group-item" onClick={() => setSelectedModule(module)}>
                        <div>
                            <RxDragHandleDots2 className="me-2" />

                            {/* { icon ? <FaCaretRight style={{paddingRight: "5px"}} id={module.icon_id} /> : <FaCaretDown style={{paddingRight: "5px"}} id={module.icon_id} /> } {module.name} */}
                            
                            {/* <i id={module.id_icon} className={(selectedModule._id === module._id ? "fa-solid fa-caret-down" : "fa-solid fa-caret-right")}</i> */}

                            {/* <i id={module.id_icon} className={classNames('fa-solid', selectedModule._id === module._id ? "fa-caret-down" : "fa-caret-right")}</i> */}

                            {/* {selectedModule._id === module._id && x = {true} : x = {false}
                            } */}

                            {/* {selectedModule._id === module._id && <DownCaret/> : <RightCaret/>} */}

                            {selectedModule._id === module._id ? <FaCaretDown style={{paddingRight: "5px"}}/> : <FaCaretRight style={{paddingRight: "5px"}}/>}
                            
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