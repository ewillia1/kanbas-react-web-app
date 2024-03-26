import { Routes, Route, Navigate } from "react-router";
import BlackHeader from "../BlackHeader";
import AccountNavigation from "./Navigation";
import { HiMiniBars3 } from "react-icons/hi2";
import Profile from "./Profile";
import ProfileEdit from "./Profile/Edit";

function Account() {
    function enableAccountNav(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <>
            <div className="row d-none d-md-block" style={{padding: "0"}}>
                <div className="col-12" style={{paddingLeft: "4vw"}}>
                    <div className="row m-0">
                        <nav className="navbar wd-breadcrumb-navbar" aria-label="Small site nav bar">
                            <div className="container-fluid">
                                <button className="wd-three-bar-menu" onClick={() => enableAccountNav()}><HiMiniBars3 /></button>
                                <nav aria-label="breadcrumb" style={{paddingTop: "14px"}}>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item active" aria-current="page">Elizabeth Williams's Profile</li>
                                    </ol>
                                </nav>
                                <button className="btn btn-light btn-outline-dark" style={{marginTop: "14px"}}>
                                    <i className="fa-solid fa-glasses"></i> Student View
                                </button>
                            </div>
                        </nav>
                    </div>
                    <hr/>
                </div>
            </div>
            
            <div className="row">
                <AccountNavigation />

                <div className="d-block d-md-none wd-0-lr-padding">
                    <BlackHeader/>
                </div>

                <div className="col-12 col-sm-12 col-md-11 col-lg-11 col-xl-11 col-xxl-11" style={{paddingLeft: "12vw", paddingRight: "12vw"}}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Profile" />} />
                        <Route path="Notifications" element={<h1>Notifications</h1>} />
                        <Route path="Profile" element={<Profile/>} />
                        <Route path="Profile/:profileId" element={<ProfileEdit/>}/>
                        <Route path="Files" element={<h1>Files</h1>} />
                        <Route path="Settings" element={<h1>Settings</h1>} />
                        <Route path="ePortfolio" element={<h1>ePortfolio</h1>} />
                        <Route path="Shared_Content" element={<h1>Shared Content</h1>}/>
                        <Route path="The_Hub" element={<h1>The Hub</h1>} />
                        <Route path="Qwickly_Course_Tools" element={<h1>Qwickly Course Tools</h1>} />
                        <Route path="Global_Announcements" element={<h1>Global Announcements</h1>} />
                    </Routes>
                </div>
            </div>
        </>
  );
}
export default Account;