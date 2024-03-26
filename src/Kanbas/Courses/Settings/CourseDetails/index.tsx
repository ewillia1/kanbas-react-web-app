import axios from "axios";
import { useState, useEffect } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { useParams } from "react-router";
import { CourseType } from "../../../Util";

function CourseDetails() {
    const { courseId } = useParams();
    const COURSES_API = "http://localhost:4000/api/courses";
    const [course, setCourse] = useState<CourseType>({
        _id: "", name: "", number: "", semester: "",
        startDate: "", endDate: "", image: "" 
    });
    
    const findCourseById = async (courseId?: string) => {
        const response = await axios.get(
        `${COURSES_API}/${courseId}`
        );
        setCourse(response.data);
    };

    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);
    
    return(
        <>
            <h1>Course Details</h1>

            <div className="row">
                <div className="col">Image:</div>
                <div className="col-8">
                    <input type="file" className="form-control" id="getFile"/>
                </div>
            </div>

            <div className="row">
                <div className="col">Name:</div>
                <div className="col-8">{course.name}</div>
            </div>

            <div className="row">
                <div className="col">Course Code:</div>
                <div className="col-8">{course.number}</div>
            </div>

            <div className="row">
                <div className="col">Blueprint Course:</div>
                <div className="col-8">No</div>
            </div>

            <div className="row">
                <div className="col">Course Template:</div>
                <div className="col-8">
                    <div className="form-check">
                        <input type="checkbox" value="DRAMA" name="check-enable" id="chkbox-enable-template" className="form-check-input"/>
                        <label htmlFor="chkbox-enable-template" className="form-check-label" style={{color: "grey"}}>Enable course as a Course Template</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">Time Zone:</div>
                <div className="col-8">
                    <select id="select-one-time-zone" className="form-select" defaultValue="EST">
                        <option value="EST">Eastern Time (US & Canada)(-05:00/-04:00)</option>
                        <option value="CST">Central Time (US & Canada)(-06:00/-05:00)</option>
                        <option value="MST">Mountain Time (US & Canada)(-07:00/-06:00)</option>
                        <option value="PST">Pacific Time (US & Canada)(-08:00/-07:00)</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="col">SIS ID:</div>
                <div className="col-8">{course.number}</div>
            </div>

            <div className="row">
                <div className="col">Subaccount:</div>
                <div className="col-8"><a style={{textDecoration: "none"}}>CS Undergrad</a></div>
            </div>

            <div className="row">
                <div className="col">Term:</div>
                <div className="col-8">{course.semester}</div>
            </div>

            <div className="row">
                <div className="col">Participation:</div>
                <div className="col-8">
                    <select id="select-one-participation" className="form-select" defaultValue="TERM">
                        <option value="TERM">Term</option>
                        <option value="DUMMY1">Dummy 1</option>
                        <option value="DUMMY2">Dummy 2</option>
                        <option value="DUMMY3">Dummy 3</option>
                        <option value="DUMMY4">Dummy 4</option>
                    </select>
                    <p>Course participation is limited to <b>term</b> start and end dates.</p>
                    <label htmlFor="text-fields-start-date">Start</label>
                    <input type="date" id="text-fields-start-date" className="form-control"/><br/>
                    <label htmlFor="text-fields-end-date">End</label>
                    <input type="date" id="text-fields-end-date" className="form-control"/><br/><br/>

                    <div className="form-check">
                        <input type="checkbox" value="RESTRICT_START" name="check-restrict" id="chkbox-restrict-start" className="form-check-input"/>
                        <label htmlFor="chkbox-restrict-start" className="form-check-label">Restrict students from viewing course before term start date</label>
                    </div>

                    <div className="form-check">
                        <input type="checkbox" value="RESTRICT_END" name="check-restrict" id="chkbox-restrict-end" className="form-check-input"/>
                        <label htmlFor="chkbox-restrict-end" className="form-check-label">Restrict studnets from view course after term end date</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">Default due time:</div>
                <div className="col-8">
                    <select id="select-one-due-time" className="form-select" defaultValue="DEFAULT">
                        <option value="DEFAULT">Account default (11:59pm)</option>
                        <option value="DUMMY1">Dummy 1</option>
                        <option value="DUMMY2">Dummy 2</option>
                        <option value="DUMMY3">Dummy 3</option>
                        <option value="DUMMY4">Dummy 4</option>
                    </select>
                    <p>This influences the user interface for setting due dates. It does not change the time due for any existing assignments.</p>
                </div>
            </div>

            <div className="row">
                <div className="col">Language:</div>
                <div className="col-8">
                    <select id="select-one-language" className="form-select" defaultValue="NOTSET">
                        <option value="NOTSET">Not set (user-configurable, defaults to English (Unit))</option>
                        <option value="DUMMY1">Dummy 1</option>
                        <option value="DUMMY2">Dummy 2</option>
                        <option value="DUMMY3">Dummy 3</option>
                        <option value="DUMMY4">Dummy 4</option>
                    </select>
                    <p>This will override any user/system language preferences. This is only recommended for foreign langauge courses.</p>
                </div>
            </div>

            <div className="row">
                <div className="col">File Storage:</div>
                <div className="col-8">10000 megabytes</div>
            </div>

            <div className="row">
                <div className="col">Large Course:</div>
                <div className="col-8">
                    <div className="form-check">
                        <input type="checkbox" value="LARGE_COURSE" name="check-large" id="chkbox-large-course" className="form-check-input"/>
                        <label htmlFor="chkbox-large-course" className="form-check-label">Launch SpeedGrader Filtered by Student Group</label>
                    </div>  
                </div>
            </div>

            <div className="row">
                <div className="col">Term:</div>
                <div className="col-8">{course.semester}</div>
            </div>

            <div className="row">
                <div className="col">Grading Scheme:</div>
                <div className="col-8">
                    <div className="form-check">
                        <input type="checkbox" value="GRADING_SCHEME" name="check-grading" id="chkbox-grading-scheme" className="form-check-input"/>
                        <label htmlFor="chkbox-grading-scheme" className="form-check-label">Enable course grading scheme</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">License:</div>
                <div className="col-8">
                    <div className="input-group mb-3">
                        <select id="select-one-license" className="form-select" defaultValue="PRIVATE">
                            <option value="PRIVATE">Private (Copyrighted)</option>
                            <option value="DUMMY1">Dummy 1</option>
                            <option value="DUMMY2">Dummy 2</option>
                            <option value="DUMMY3">Dummy 3</option>
                            <option value="DUMMY4">Dummy 4</option>
                        </select>
                        <label className="input-group-text" htmlFor="select-one-license"><HiOutlineQuestionMarkCircle style={{color: "red"}}/></label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">File Copyright:</div>
                <div className="col-8">
                    <div className="form-check">
                        <input type="checkbox" value="COPYRIGHT" name="check-copyright" id="chkbox-copyright" className="form-check-input"/>
                        <label htmlFor="chkbox-copyright" className="form-check-label">Copyright and license information must be provided for files before they are published.</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">Visibility:</div>
                <div className="col-8">
                    <p style={{marginTop: "0"}}>If you need to make your course public please contact your administrator/support.</p>
                    <div className="input-group mb-3">
                        <select id="select-one-visibility" className="form-select" defaultValue="COURSE">
                            <option>Course</option>
                            <option value="DUMMY1">Dummy 1</option>
                            <option value="DUMMY2">Dummy 2</option>
                            <option value="DUMMY3">Dummy 3</option>
                            <option value="DUMMY4">Dummy 4</option>
                        </select>
                        <label className="input-group-text" htmlFor="select-one-visibility"><HiOutlineQuestionMarkCircle style={{color: "red"}}/></label>
                    </div>

                    <div className="form-check">
                        <input type="checkbox" name="check-visibility" id="chkbox-visibility" className="form-check-input"/>
                        <label htmlFor="chkbox-visibility" className="form-check-label">Include this course in the public course index</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">Format:</div>
                <div className="col-8">
                    <select id="select-one-format" className="form-select" defaultValue="ONCAMPUS">
                        <option value="ONCAMPUS">On-Campus</option>
                        <option value="DUMMY1">Dummy 1</option>
                        <option value="DUMMY2">Dummy 2</option>
                        <option value="DUMMY3">Dummy 3</option>
                        <option value="DUMMY4">Dummy 4</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="col">Format:</div>
                <div className="col-8">
                    <div className="form-check">
                        <input type="checkbox" value="MASTERY_PATHS" name="check-mastery-paths" id="chkbox-mastery-paths" className="form-check-input"/>
                        <label htmlFor="chkbox-mastery-paths" className="form-check-label">Enable individual learning paths for students based on assessment</label>
                    </div>
                    
                </div>
            </div>

            <div className="row">
            <div className="col">Description:</div>
            <div className="col-8">
                <textarea className="form-control" id="descriptionTextArea"></textarea>
            </div>
            </div>
                
            <hr/>
            <input type="button" value="Update Course Details" className="btn btn-danger float-end"/>
        </>
    );
}
export default CourseDetails;