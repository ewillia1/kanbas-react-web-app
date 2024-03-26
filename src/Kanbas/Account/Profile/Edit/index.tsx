import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TiPencil } from "react-icons/ti";

function ProfileEdit() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleCloseEdit() {
        navigate(`/Kanbas/Account/Profile`);
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
                        <form>
                            <div className="mb-3">
                                <label htmlFor="studentName" className="form-label"><b>Name:*</b></label>
                                <input type="text" className="form-control" id="studentName" value="Elizabeth Williams" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pronouns" className="form-label" ><b>Pronouns:</b></label>
                                <select className="form-select" name="pronouns" id="pronouns">
                                    <option value="">None</option>
                                    <option value="He/Him">He/Him</option>
                                    <option value="She/Her">She/Her</option>
                                    <option value="They/Them">They/Them</option>
                                    <option value="He/They">He/They</option>
                                    <option value="She/They">She/They</option>
                                    <option value="He/She/They">He/She/They</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="text-fields-title" className="form-label"><b>Title:</b></label>
                                <input type="text" className="form-control" id="text-fields-title"/>
                            </div>
                            <div className="mb-3">
                                <h4>Contact</h4>
                                {/* TODO: Link to settings page. */}
                                <p>No registered services, you can add some on the <a className="wd-profile-hyperlink">settings</a> page.</p>
                            </div>
                            <div className="mb-3">
                                <h4>Biography</h4>
                                <textarea className="form-control" id="biography"></textarea>
                            </div>
                            <div className="mb-3">
                                <h4 className="mb-0">Links</h4>
                                <div className="row g-2">
                                    <div className="col-sm wd-link-header">
                                        <label htmlFor="linkTitle" className="form-label">Title</label>
                                    </div>
                                    <div className="col-sm wd-link-header">
                                        <label htmlFor="linkUrl" className="form-label">URL</label>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" aria-label="title1"/>
                                    <span className="input-group-text"><i className="fa-solid fa-arrow-right"></i></span>
                                    <input type="text" className="form-control" aria-label="url1"/>
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon1"><i className="fa-solid fa-x wd-cancel-link"></i></button>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" aria-label="title2"/>
                                    <span className="input-group-text"><i className="fa-solid fa-arrow-right"></i></span>
                                    <input type="text" className="form-control" aria-label="url2"/>
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon1"><i className="fa-solid fa-x wd-cancel-link"></i></button>
                                </div>
                                <button type="button" className="wd-rounded-corners-all-around wd-home-button">Add another link</button>
                            </div>
                            <hr/>
                            <br/>

                            <button type="button" className="wd-rounded-corners-all-around wd-save-button-profile float-end" onClick={handleCloseEdit}>Save Profile</button>
                            <button type="button" className="wd-rounded-corners-all-around wd-cancel-button-profile float-end" onClick={handleCloseEdit}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="col-2">
                <div>
                    <button type="button" className="wd-rounded-corners-all-around wd-home-button" onClick={handleCloseEdit}><TiPencil style = {{transform: 'rotate(270deg)' }}/> Cancel Editing</button>
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
export default ProfileEdit;