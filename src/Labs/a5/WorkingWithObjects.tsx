import { useEffect, useState } from "react";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({              // Create a state variable that holds
        id: 1, title: "NodeJS Assignment",                      // default values for the form below.
        description: "Create a NodeJS server with ExpressJS",   // Eventually we will fetch this initial
        due: "2021-10-10", completed: false, score: 0,          // data from the server and populate
    });                                                         // the form with the remote data so...
    console.log("assignment = " + JSON.stringify(assignment));

    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"    // ...we can modify it here in the UI.

    const [module, setModule] = useState({
        id: "M1A101", name: "Module 1", description: "This is the description for module 1.", course: "A101"
    });
    console.log("module = " + JSON.stringify(module));

    const MODULE_URL = "http://localhost:4000/a5/module";

    function handleChecked(e: boolean) {
        console.log("in handleChecked");
        console.log("e = " + e);
        setAssignment({ ...assignment, completed: e});
    }

    return (
        <div>
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <div className="mb-3 row">
                <div className="col-sm-9">
                    <input id="assignmentTitleInput" className="form-control" type="text" onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} value={assignment.title}/>
                </div>
                <div className="col-sm-3">
                    <a type="button" className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                        Update Title
                    </a>
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-sm-9">
                    <input id="assignmentScoreInput" className="form-control" type="number" min={0} onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })} value={assignment.score}/>
                </div>
                <div className="col-sm-3">
                    <a type="button" className="btn btn-primary" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
                        Update Score
                    </a>
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-sm-9">
                    <div className="form-check float-end">
                        <input className="form-check-input" type="checkbox" id="assignmentCompleted" onChange={(e) => handleChecked(e.target.checked)} checked={assignment.completed}/>
                        <label className="form-check-label" htmlFor="assignmentCompleted">
                            Assignment Completed
                        </label>
                    </div>
                </div>
                <div className="col-sm-3">
                    <a type="button" className="btn btn-primary" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
                        Update Completed
                    </a>
                </div>
            </div>

            <h4>Retrieving Objects</h4>
            <a type="button" className="btn btn-primary me-2 mb-2" href="http://localhost:4000/a5/assignment">
                Get Assignment
            </a>

            <h4>Retrieving Properties</h4>
            <a type="button" className="btn btn-primary me-2 mb-2" href="http://localhost:4000/a5/assignment/title">
                Get Title
            </a>

            <h4>Working With Module Object</h4>
            <a type="button" className="btn btn-primary me-2 mb-2" href="http://localhost:4000/a5/module">
                Get Module
            </a>
            <a type="button" className="btn btn-primary me-2 mb-2" href="http://localhost:4000/a5/module/name">
                Get Module Name
            </a>
            <div className="mb-3 row">
                <div className="col-sm-9">
                    <input id="moduleNameInput" className="form-control" type="text" onChange={(e) => setModule({ ...module, name: e.target.value })} value={module.name}/>
                </div>
                <div className="col-sm-3">
                    <a type="button" className="btn btn-primary" href={`${MODULE_URL}/name/${module.name}`}>
                        Update Module Name
                    </a>
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-sm-9">
                    <input id="moduleDescriptionInput" className="form-control" type="text" onChange={(e) => setModule({ ...module, description: e.target.value })} value={module.description}/>
                </div>
                <div className="col-sm-3">
                    <a type="button" className="btn btn-primary" href={`${MODULE_URL}/description/${module.description}`}>
                        Update Module Description
                    </a>
                </div>
            </div>
        </div>
    );
}
export default WorkingWithObjects;