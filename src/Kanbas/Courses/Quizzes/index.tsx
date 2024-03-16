import { FaCaretDown, FaCheckCircle, FaEllipsisV, FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteQuiz, selectQuiz, updateQuiz } from "./quizzesReducer";        // Import reducer functions to add, delete, and update quizs.
import { QuizType, KanbasState } from "../../store";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";
import { IoRocketOutline } from "react-icons/io5";
import { FiSlash } from "react-icons/fi";

function Quizzes() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const quizzesList = useSelector((state: KanbasState) => state.quizzesReducer.quizzes);  // Retrieve current state variables modules and module from reducer.
    const [toBeDeleted, setToBeDeleted] = useState<QuizType | undefined>();
    const dispatch = useDispatch();             // Get dispatch to call reducer functions.
    const [showForDelete, setShowForDelete] = useState(false);
    const [showForAdd, setShowForAdd] = useState(false);

    console.log("quizzesList = " + JSON.stringify(quizzesList));

    function handleShowAdd() {
        console.log("In handleAddQuiz");
        setShowForAdd(true);
    }

    function handleCloseNoAdd() {
        console.log("In handleCloseNoAdd");
        setShowForAdd(false);
    }

    function handleCloseYesAdd() {
        console.log("In handleCloseYesAdd");
        setShowForAdd(false);
        navigate(`/Kanbas/Courses/${courseId}/Quizzes/DetailsEditor/DetailsEditor`);
    }

    function handleShowDelete(quiz: QuizType) {
        setToBeDeleted(quiz);
        console.log(toBeDeleted);
        console.log("In handleShowDelete");
        setShowForDelete(true);
    };

    function handleCloseYesDelete(quiz: QuizType  | undefined) {
        console.log("In handleCloseYesDelete");
        console.log("quiz being deleted = " + JSON.stringify(quiz));
        dispatch(deleteQuiz(quiz?._id));
        setShowForDelete(false);
    }

    function handleCloseNoDelete() {
        console.log("In handleCloseNoDelete");
        setShowForDelete(false);
    }

    function handleEditQuiz(quiz: QuizType) {
        console.log("In handleEditQuiz");
        navigate(`/Kanbas/Courses/${courseId}/Quizzes/QuizDetails/${quiz._id}`);
    }

    function handlePublish(quiz: QuizType) {
        const updatedQuiz = {...quiz, published: !quiz.published};  
        dispatch(updateQuiz(updatedQuiz));
    }

    return (
        <>
            <div>
                <div className="form-outline w-25 float-start" data-mdb-input-init>
                    <input type="search" id="form1" className="form-control wd-nowrap mt-1" placeholder="Search for Quiz" title="Input search item."/>
                </div>

                <div className="float-end">
                    {/* <button type="button" className="btn btn-light btn-outline-dark wd-add-quiz" onClick={handleAddQuiz} id="AddQuizBtn" title="Click to add quiz."><FaPlus /> Quiz</button> */}
                    <button type="button" className="btn btn-light btn-outline-dark wd-add-quiz" onClick={() => handleShowAdd()} id="AddQuizBtn" title="Click to add quiz."><FaPlus /> Quiz</button>
                    <Modal show={showForAdd} backdrop="static" aria-labelledby="contained-modal-title-vcenter1" centered onHide={() => handleCloseNoAdd()}>
                        <Modal.Header closeButton>
                            Adding a Quiz
                        </Modal.Header>
                        <Modal.Body>
                            Are you sure that you want to add a new quiz?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => handleCloseNoAdd()}>
                                No
                            </Button>
                            <Button variant="primary" onClick={() => handleCloseYesAdd()}>
                                Yes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <button type="button" className="btn btn-light btn-outline-dark"><FaEllipsisV /></button>
                </div>
                <div className="wd-float-done"></div>
            </div>
            <hr/>

            <ul className="list-group wd-quizSection">
                <li className="list-group-item" draggable="true">
                    <div style={{marginBottom: "15px", cursor: "pointer"}} className="ms-2">
                        <FaCaretDown style={{paddingRight: "5px"}} /> Assignment Quizzes
                    </div>

                    <ul className="list-group">
                        {quizzesList.filter((quiz) => quiz.course === courseId).map((quiz) => (
                            <li key={quiz._id} className="list-group-item wd-quiz" onClick={() => selectQuiz(quiz)} draggable="true">
                                
                                {/* TODO: When quiz is published make color green. When quiz is not published make color grey (this can be because value is initially set to published and if the publish buttons are clicked). */}
                                {quiz.published ?  <IoRocketOutline className="ms-2 me-3" style={{color: "green"}}/> : <IoRocketOutline className="ms-2 me-3" style={{color: "grey"}}/>}

                                <span className="float-end">

                                    {/* TODO: When FiSlash button is clicked, change quiz.published to true and change icon to FaCheckCircle. When FaCheckCircle button is clicked, change quiz.published to false and change icon to FiSlash. */}
                                    {quiz.published ? <button style={{backgroundColor: "unset"}} onClick={() => handlePublish(quiz)}><FaCheckCircle className="text-success"/></button> : <button style={{backgroundColor: "unset"}} onClick={() => handlePublish(quiz)}><FiSlash/></button>}
                                    
                                    <button id="threeDotDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: "unset"}}><FaEllipsisV className="ms-3 me-2"/></button>
                
                                    <ul className="dropdown-menu dropdown-menu-end wd-three-dot-menu" aria-labelledby="threeDotDropdown">
                                        <li><a className="dropdown-item" onClick={() => handleEditQuiz(quiz)}>Edit</a></li>
                                        <li><a className="dropdown-item" onClick={() => handleShowDelete(quiz)}>Delete</a></li>

                                        {/* TODO: Publish functionality. */}
                                        {quiz.published ? <li><a className="dropdown-item" onClick={() => handlePublish(quiz)}>Unpublish</a></li> : <li><a className="dropdown-item" onClick={() => handlePublish(quiz)}>Publish</a></li>}
                                    </ul>

                                    <Modal show={showForDelete} backdrop="static" aria-labelledby="contained-modal-title-vcenter2" centered onHide={() => handleCloseNoDelete()}>
                                        <Modal.Header closeButton>
                                            Deleting a Quiz
                                        </Modal.Header>
                                        <Modal.Body>
                                            Are you sure that you want to delete quiz: {toBeDeleted?.title}?
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={() => handleCloseNoDelete()}>
                                                No
                                            </Button>
                                            <Button variant="primary" onClick={() => handleCloseYesDelete(toBeDeleted)}>
                                                Yes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </span>

                                <Link id="OpenAssignment" to={`/Kanbas/Courses/${courseId}/Quizzes/QuizDetails/${quiz._id}`} >
                                    <b>{quiz.title}</b><br/>
                                    <span className="wd-week-span"><b>{quiz.availability ? "Available" : "Closed"}</b> | <b>Due: </b>{quiz.dueDate} | {quiz.points} pts | {quiz.numQuestions} {parseInt(quiz.numQuestions) < 2 ? "Question" : "Questions"}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Quizzes;