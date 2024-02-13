import { assignments, enrollments, grades, users } from "../../Database";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import { FaFileExport, FaFileImport, FaGear, FaMagnifyingGlass } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";
import { CiFilter } from "react-icons/ci";

function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);

    function myChangeFunction() {
        // TODO document why this function 'myChangeFunction' is empty
    }

    return (
        <div>
            <button type="button" className="wd-float-right wd-rounded-corners-all-around wd-home-button wd-margin-5px"><FaGear /></button>
            <button type="button" className="wd-float-right wd-rounded-corners-all-around wd-home-button wd-margin-5px"><FaFileImport /> Export</button>
            <button type="button" className="wd-float-right wd-rounded-corners-all-around wd-home-button wd-margin-5px"><FaFileExport /> Import</button>
            <div className="wd-float-done"></div>

            <div className="row">
                <div className="col-sm">
                    <label htmlFor="studentList" className="form-label">Student Name</label>
                    <div className="input-group">
                        <div className="input-group-text"><FaMagnifyingGlass /></div>
                        <input type="text" className="form-control wd-search-dropdown" id="studentList" list="studentListOptions" placeholder="Search Students" onChange={myChangeFunction}/>
                        <div className="input-group-text wd-dropdown-angle"><SlArrowDown /></div>
                    </div>
                    <datalist id="studentListOptions">
                        {es.map((enrollment, x) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return(
                                <option key={x}>{user?.firstName} {user?.lastName}</option>
                            );
                        })}
                    </datalist>
                </div>
                <div className="col-sm">
                    <label htmlFor="assignmentList" className="form-label">Assignment Names</label>
                    <div className="input-group">
                        <div className="input-group-text"><FaMagnifyingGlass /></div>
                        <input type="text" className="form-control wd-search-dropdown" id="assignmentList" list="assignmentListOptions" placeholder="Search Assignments" onChange={myChangeFunction}/>
                        <div className="input-group-text wd-dropdown-angle"><SlArrowDown /></div>
                    </div>
                    <datalist id="assignmentListOptions">
                        {as.map((homework) => {
                            return(
                                <option key={homework._id}>{homework.title}</option>
                            );
                        })}
                    </datalist>
                </div>
            </div>

            <button className="wd-rounded-corners-all-around wd-grade-button wd-apply-filters-button"><CiFilter /> Apply Filters</button>

            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover" aria-describedby="gradeTable">
                    <thead className="table-light">
                        <tr>
                            <th>Student Name</th>
                            {as.map((assignment, a) => (<th className="wd-table-header" key={a}>{assignment.title}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {es.map((enrollment, i) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr key={i}>
                                    <td>
                                        <Link to="/Kanbas/Account" className="wd-student-name">{user?.firstName} {user?.lastName}</Link>
                                    </td>
                                    
                                    {as.map((assignment, index) => {
                                        const grade = grades.find((grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return(
                                            <td key={index} className="wd-table-cell">
                                                <input className="wd-table-cell" defaultValue={grade?.grade} size={4} type="number" min="1" max="100"/>
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Grades;