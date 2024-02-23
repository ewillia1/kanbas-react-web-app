import { useState } from "react";                                   // Import useState to create state variables.
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaRegCheckCircle, FaPlus, FaCaretDown, FaAngleRight, FaCaretRight } from "react-icons/fa";
import { useParams } from "react-router";
import { RxDragHandleDots2 } from "react-icons/rx";

function ModuleList() {
    console.log("modules (json) = " + modules);

    const { courseId } = useParams();
    const [moduleList, setModuleList] = useState(modules);          // Create modules state variables initialized from database.  
    console.log("moduleList = " + moduleList);
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    const [module, setModule] = useState({                  // Declare module state variable initialized with default values used to edit new and existing modules.
        _id: "0", name: "New Module",
        description: "New Description",
        course: courseId || ""
    });
    console.log("module = " + module);

    const addModule = (module: any) => {                    // addModule appends new module at beginning of modules, overriding _id with a timestamp.
        const newModule = { ...module,  _id: new Date().getTime().toString() };
        console.log("newModule = " + newModule);
        setModuleList([newModule, ...moduleList]);          // Update moduleList.
        setModule({                                         // Clear the module.
            _id: "0", name: "New Module",
            description: "New Description",
            course: courseId || ""
        });
    };

    const deleteModule = (moduleId: string) => {            // deleteModule filters out the module whose ID is equal to the parameter moduleId.
        const newModuleList = moduleList.filter( (module) => module._id !== moduleId );
        setModuleList(newModuleList);                       // Update moduleList.
    };

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
                <input className="form-contro m-2 p-2" style={{borderRadius: "6px"}} value={module.name} onChange={(e) => setModule({ ...module, name: e.target.value })}/>       {/* Update module.name for every key stroke. */}
                    <button type="button" className="btn btn-success m-2 p-2 float-end" style={{borderRadius: "6px"}} onClick={() => { addModule(module) }}>Add</button>         {/* Add buttons calls addModule with module being edited in the form to be added to the modules. */}
                    <textarea className="form-control m-2 p-2" style={{width: "-webkit-fill-available", borderRadius: "6px"}} value={module.description} onChange={(e) => setModule({ ...module, description: e.target.value })}/>   {/* Update module.description for every key stroke. */}
                </li>

                {moduleList.filter((module) => module.course === courseId).map((module) => (
                    <li key={module._id} className="list-group-item" onClick={() => setSelectedModule(module)}>
                        <div style={{cursor: "pointer"}}>
                            <RxDragHandleDots2 className="me-2" />

                            {selectedModule._id === module._id ? <FaCaretDown style={{paddingRight: "5px"}}/> : <FaCaretRight style={{paddingRight: "5px"}}/>} {module.name}
                            
                            <span className="float-end">
                                <FaCheckCircle className="text-success" />
                                <FaCaretDown style={{paddingLeft: "5px"}} />
                                <FaPlusCircle className="ms-2" />
                                <FaEllipsisV className="ms-2" />
                                <button className="btn btn-danger" style={{borderRadius: "6px"}} onClick={() => deleteModule(module._id)}>Delete</button>
                            </span>
                        </div>

                        {selectedModule._id === module._id && (
                            <ul className="list-group" style={{cursor: "pointer"}}>
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