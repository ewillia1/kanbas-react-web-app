import { Modal, Button } from "react-bootstrap";
import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TiPencil } from "react-icons/ti";

function Profile() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function editProfile() {
        navigate(`/Kanbas/Account/Profile/Editor`);
    }
    
    return(
        <div className="row">
            <div className="col-10">
                <div className="wd-flex-container">
                    <div className="wd-flex-item-left">
                        <button type="button" className="wd-user-avatar" onClick={handleShow}>
                            <i className="fa-regular fa-circle-user fa-5x"></i> 
                        </button>
                    </div>
                    <div className="wd-flex-item-right">
                        <h3>Elizabeth Williams</h3><br/>
                        <h4>Contact</h4>
                        {/* TODO: Link to settings page. */}
                        <p>No registered services, you can add some on the <a className="wd-profile-hyperlink">settings</a> page.</p><br/>
                        <h4>Biography</h4>
                        <p>Elizabeth Williams hasn't added a bio</p><br/>
                        <h4>Links</h4>
                        <p>Elizabeth Williams hasn't added any links</p>
                    </div>
                </div>
            </div>

            <div className="col-2">
                <div>
                    {/* <button type="button" className="wd-rounded-corners-all-around wd-home-button" onClick="window.location.href='/Kanbas/Account/Profile/Edit/screen.html'"><img src="pencil_icon.png" alt="pencil icon" width="15px" height="15px"> Edit Profile</button> */}
                    <button type="button" className="wd-rounded-corners-all-around wd-home-button" onClick={editProfile}><TiPencil style = {{transform: 'rotate(270deg)' }}/> Edit Profile</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Profile Picture</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Upload a Picture
                    <br/>
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" id="inputGroupFile02"/>
                        <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default Profile;