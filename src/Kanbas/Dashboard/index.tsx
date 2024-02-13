import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { FaEllipsisV } from "react-icons/fa";
import BlackHeader from "../BlackHeader";
import "./index.css";

function Dashboard() {
    return (
        <>
            <div className="d-none d-sm-block sticky-top wd-dashboard" style={{paddingTop: "10px", paddingLeft: "20px", paddingRight: "20px"}}> 
                <h1>Dashboard</h1> 
                <hr/>
            </div>

            <div className="d-block d-sm-none wd-0-lr-padding sticky-top">
                <BlackHeader/>
            </div>

            <div className="d-block d-sm-none" style={{paddingTop: "10px", paddingLeft: "20px", paddingRight: "20px"}}>
                <p className="wd-three-dot-menu"><FaEllipsisV /></p>
                <hr />
            </div>
            
            <div style={{paddingTop: "10px", paddingLeft: "20px", paddingRight: "20px"}}>
                <h2>Published Courses (12)</h2> 
                <hr />
            </div>

            <div className="row" style={{paddingTop: "10px", paddingLeft: "20px", paddingRight: "20px"}}>
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top" style={{ height: 150 }}/>
                                <div className="card-body">
                                    <Link className="card-title wd-card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}><p className="wd-nowrap">{course.name}</p></Link>
                                    <p className="card-text wd-nowrap">{course.name}</p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );    
}
export default Dashboard