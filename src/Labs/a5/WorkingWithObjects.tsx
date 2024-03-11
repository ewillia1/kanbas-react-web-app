import React, { useState } from "react";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({              // Create a state variable that holds
        id: 1, title: "NodeJS Assignment",                      // default values for the form below.
        description: "Create a NodeJS server with ExpressJS",   // Eventually we will fetch this initial
        due: "2021-10-10", completed: false, score: 0,          // data from the server and populate
    });                                                         // the form with the remote data so.

    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"    // we can modify it here in the UI.

    return (
        <div>
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <div className="mb-3 row">
                <div className="col-sm-10">
                    <input className="form-control" type="text" onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} value={assignment.title}/>
                </div>
                <div className="col-sm-2">
                    <a type="button" className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                        Update Title
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

        </div>
    );
}
export default WorkingWithObjects;