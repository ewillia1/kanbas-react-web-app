import { useNavigate, useParams, Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import "./index.css";
import { addQuiz, selectQuiz, updateQuiz } from "../quizzesReducer";        // Import reducer functions to add, delete, and update quizzes.
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
import { useEffect, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FiSlash } from "react-icons/fi";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-quill/dist/quill.snow.css';
import { FaRegKeyboard } from "react-icons/fa6";
import { IoCodeSlashOutline } from "react-icons/io5";
import { CgArrowsVAlt, CgShapeHalfCircle } from "react-icons/cg";
import { RxDragHandleDots2 } from "react-icons/rx";
import React from "react";
import ReactQuill from 'react-quill';
import Modal from 'react-bootstrap/Modal';

function QuizDetailsEditor(this: any) {
    const { courseId } = useParams();
    console.log("courseId = " + courseId);
    const { quizId } = useParams();
    console.log("quizId = " + quizId);
    const quizListFromReducer = useSelector((state: KanbasState) => state.quizzesReducer.quizzes);  // Retrieve current state variables quizzes from reducer.
    const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz);
    
    const dispatch = useDispatch();             // Get dispatch to call reducer functions.
    const navigate = useNavigate();

    const reactQuillRef = React.useRef<ReactQuill>(null);
    const editor = reactQuillRef.current?.getEditor();
    console.log("editor = " + editor);

    // Determining the word count for the quiz instructions.
    let numOfWords = 0;
    function findNumberOfWords() {
        if (editor !== undefined) {
            const unprivilegedEditor = reactQuillRef.current?.makeUnprivilegedEditor(editor);
            console.log("getText() = " + unprivilegedEditor?.getText());
            console.log("getLength() = " + unprivilegedEditor?.getLength());
            var input = unprivilegedEditor?.getText();
            var words = input?.match(/\b[-?(\w+)?]+\b/gi);
            console.log("words = " + words);
            console.log("number of words = " + words?.length);
            if (words?.length !== undefined) {
                numOfWords = words?.length;
            }
        }
    }
    
    // If user is coming from clicking add quiz, set values to default values.
    // Else the user is coming from clicking an old quiz, so set values to the values of the quiz clicked.
    // Only run the effect on the initial render.
    useEffect(() => {
        // Runs only on the first render.
        if ( quizId !== undefined ) {
            if (quizId.localeCompare("DetailsEditor")) {                // If quizID !== "DetailsEditor".
                console.log("Coming from editing an old quiz");
                console.log("IF quizId = " + quizId);
                const a = quizListFromReducer.find((quiz) => quiz._id === quizId);
                dispatch(selectQuiz(a));
                console.log("quiz.time = " + quiz.time);
            } else {                                                    // Else quizID === "DetailsEditor".
                console.log("1 Coming from adding a new quiz");
                console.log("ELSE quizId = " + quizId);
                dispatch(selectQuiz({ 
                    _id: "", title: "Unnamed Quiz", subtitle: "New Subtitle", 
                    instructions: "", quizType: "Graded Quiz", 
                    assignmentGroup: "Quizzes", shuffle: true, timeLimit: true, time: "20", 
                    multipleAttempts: false, showCorrectAnswers: true,
                    showCorrectAnswersDate: "", hideCorrectAnswersDate: "", accessCodeOn: false, 
                    accessCode: "", viewResponses: true,
                    oneQuestion: true, webCam: false, lockedQuestions: false,
                    forAccess: "Everyone", dueDate: "", availableFromDate: "", 
                    untilDate: "", points: "0", numQuestions: "0", published: false
                }));
                console.log("2 Coming from adding a new quiz");
            }
        }
    }, []);
    
    // Function to handle saving a quiz.
    function handleSave() {
        if (quizId !== undefined) {
            if (!quizId.localeCompare("DetailsEditor")) {
                dispatch(addQuiz({ ...quiz, course: courseId }));
            } else {
                dispatch(updateQuiz(quiz));
            }
        }
        navigate(`/Kanbas/Courses/${courseId}/Quizzes`);
    };

    // Function to handle saving a quiz and publishing it.
    function handleSaveAndPub() {
        if (quizId !== undefined) {
            if (!quizId.localeCompare("DetailsEditor")) {
                const updatedQuiz = {...quiz, published: "true"};  
                dispatch(addQuiz({ ...updatedQuiz, course: courseId }));
            } else {
                const updatedQuiz = {...quiz, published: "true"};  
                dispatch(updateQuiz(updatedQuiz));
            }
        }
        navigate(`/Kanbas/Courses/${courseId}/Quizzes`);
    };

    const [key, setKey] = useState('details');

    // Function that enables and disables the number of minutes a quiz can be taken.
    function enableMinTextArea() {
        let textBox = document.getElementById("quizMinutesText") as HTMLInputElement;
        let chkbox = document.getElementById("timeLimitCheckbox") as HTMLInputElement;
        if (textBox !== null) {
            if (chkbox !== null) {
                textBox.disabled = !(chkbox.checked);
            }
        }
    };

    // Function that enables and disables the input for the show correct answers date.
    function enableShowCorrectAnswers() {
        let textBox = document.getElementById("showCorrectAnswersDate") as HTMLInputElement;
        let chkbox = document.getElementById("correctAnswer") as HTMLInputElement;
        if (textBox !== null) {
            if (chkbox !== null) {
                textBox.disabled = !(chkbox.checked);
            }
        }
    }

    // Function that enables and disables the creating of an access code.
    function createAccessCode() {
        let textBox = document.getElementById("accessCodeText") as HTMLInputElement;
        let chkbox = document.getElementById("accessCodeCheckbox") as HTMLInputElement;
        if (textBox !== null) {
            if (chkbox !== null) {
                textBox.disabled = !(chkbox.checked);
            }
        }
    };

    // ReactQuill quiz instruction's rich text editor code.
    const modules = {
        toolbar: [
            [{ size: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script:  "sub" }, { script:  "super" }],
            ["blockquote", "code-block"],
            [{ list:  "ordered" }, { list:  "bullet" }],
            ["link", "image", "video"]
        ],
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleEditInstructions(content: string, delta: string, source: string, editor: any) {
        console.log("handleEditInstructions");
        console.log("content = " + content);
        console.log("delta = " + JSON.stringify(delta));
        console.log("source = " + source);
        console.log("editor = " + JSON.stringify(editor));
        console.log("editor.getContents() = " + JSON.stringify(editor.getContents()));
        console.log("editor.getContents().ops[0].insert = " + editor.getContents().ops[0].insert);
        // findNumberOfWords();
        // dispatch(selectQuiz({ ...quiz, instructions: content}));
    }

    return (
        <div>
            <button type="button" className="wd-float-right btn btn-light btn-outline-dark mt-1"><FaEllipsisV /></button>
            <span className="wd-float-right mt-1" style={{paddingRight: "15px", color:"grey"}}><FiSlash style={{marginRight: "5px"}}/>Not Published</span>
            <span className="wd-float-right mt-1" style={{paddingRight: "15px"}}>Points {quiz.points}</span>
            <div className="wd-float-done"></div>
            <hr/>

            <Tabs id="quiz-tab" activeKey={key} onSelect={(k: any) => setKey(k)} className="mb-3" style={{color: "red"}}>
                <Tab eventKey="details" title="Details">
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="quizName" value={quiz.title} onChange={(e) => dispatch(selectQuiz({ ...quiz, title: e.target.value }))}/>
                        </div>

                        <div className="mb-5">
                            Quiz Instructions: <span className="float-end"><CgShapeHalfCircle style = {{color:"green", transform: 'rotate(90deg)', fontSize: "2em"}}/> 100%</span>
                            
                            {/* <ReactQuill ref={reactQuillRef} id="quizInstructions" modules={modules} theme="snow" value={quiz.instructions} onChange={(e) => dispatch(selectQuiz({ ...quiz, instructions: e}))}/> */}
                            <ReactQuill ref={reactQuillRef} id="quizInstructions" modules={modules} theme="snow" value={quiz.instructions} onChange={(content, delta, source, editor) => handleEditInstructions(content, delta, source, editor)}/>
                            
                            <span style={{color: "buttonborder"}}>
                                p
                                <span className="float-end mt-2">
                                    <FaRegKeyboard style={{color: "red", cursor: "pointer"}} onClick={handleShow}/> | <span style={{color: "red"}}>{numOfWords} words</span> | <IoCodeSlashOutline style={{color: "red", cursor: "pointer"}}/> | <CgArrowsVAlt style = {{transform: 'rotate(45deg)', color: "red", cursor: "pointer"}}/>  <button style={{borderRadius: "8px", borderWidth: "thin", borderColor: "red", backgroundColor: "unset"}}><RxDragHandleDots2 /></button>
                                </span>
                            </span>

                            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Keyboard Shortcuts</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <hr/>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <b>OPTION+F8</b>
                                            </div>
                                            <div className="col">
                                                Open this keyboard shortcuts dialog
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <b>SHIFT+Arrows</b>
                                            </div>
                                            <div className="col">
                                                Highlight an element to activate the element options toolbar
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <b>CTRL+F9</b>
                                            </div>
                                            <div className="col">
                                                Focus element options toolbar
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <b>OPTION+F9</b>
                                            </div>
                                            <div className="col">
                                                Go to the editor's menubar
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <b>OPTION+F10</b>
                                            </div>
                                            <div className="col">
                                                Go to the editor's toolbar
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <b>ESC</b>
                                            </div>
                                            <div className="col">
                                                Close a menu or dialog. Also returns you to the editor
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <b>TAB/Arrows</b>
                                            </div>
                                            <div className="col">
                                                Navigate through the menu or toolbar
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <p>Other editor shortcuts may be found at <a href="https://www.tiny.cloud/docs/advanced/keyboard-shortcuts/" style={{color: "red", textDecoration: "none"}}>https://www.tiny.cloud/docs/advanced/keyboard-shortcuts/</a></p>
                                </Modal.Body>
                            </Modal>
                        </div>

                        <div className="wd-bottom-section">
                            <div className="row mb-3">
                                <label htmlFor="points" className="col-sm-4 col-form-label wd-assign-edit-label">Points</label>
                                <div className="col-sm-8">
                                    <input type="number" min="0" className="form-control" id="points" value={quiz.points} onChange={(e) => dispatch(selectQuiz({ ...quiz, points: e.target.value }))}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="quizType" className="col-sm-4 col-form-label wd-assign-edit-label">Quiz Type</label>
                                <div className="col-sm-8">
                                    <select className="form-select" id="quizType" name="quizType" defaultValue={quiz.quizType} onChange={(e) => dispatch(selectQuiz({ ...quiz, quizType: e.target.value}))}>
                                        <option value="Graded Quiz">Graded Quiz</option>
                                        <option value="Practice Quiz">Practice Quiz</option>
                                        <option value="Graded Survey">Graded Survey</option>
                                        <option value="Ungraded Survey">Ungraded Survey</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="quizGroup" className="col-sm-4 col-form-label wd-assign-edit-label">Assignment Group</label>
                                <div className="col-sm-8">
                                    <select className="form-select" id="quizGroup" name="quizGroup">
                                        <option>QUIZZES</option>
                                        <option>EXAMS</option>
                                        <option>ASSIGNMENTS</option>
                                        <option>PROJECTS</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 offset-sm-4">
                                    <b>Options</b>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 offset-sm-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="shuffleAnswersId" checked={quiz.shuffle} onChange={(e) => dispatch(selectQuiz({ ...quiz, shuffle: e.target.checked }))}/>
                                        <label className="form-check-label" htmlFor="shuffleAnswersId">
                                            Shuffle Answers
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 offset-sm-4">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="timeLimitCheckbox" checked={quiz.timeLimit} onChange={(e) => {dispatch(selectQuiz({ ...quiz, timeLimit: e.target.checked })); enableMinTextArea();}}/>
                                        <label className="form-check-label" htmlFor="timeLimitCheckbox">
                                            Time Limit
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="number" className="form-control" id="quizMinutesText" value={quiz.time} onChange={(e) => dispatch(selectQuiz({ ...quiz, time: e.target.value }))} min="0" disabled={!quiz.timeLimit}/>
                                    </div>
                                    <div className="form-check form-check-inline" style={{padding: "0"}}>
                                        <label className="form-check-label" htmlFor="quizMinutesText">Minutes</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 offset-sm-4 border wd-border-radius-8px">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="multipleAttemptsId" checked={quiz.multipleAttempts} onChange={(e) => dispatch(selectQuiz({ ...quiz, multipleAttempts: e.target.checked }))}/>
                                        <label className="form-check-label" htmlFor="multipleAttemptsId">
                                            Allow Multiple Attempts
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 offset-sm-4 border wd-border-radius-8px">
                                    <div className="form-check">
                                        {/* Did not handle a default value or onChange since this is not a project requirement. */}
                                        <input className="form-check-input" type="checkbox" id="seeQuizReponses"/>
                                        <label className="form-check-label" htmlFor="seeQuizReponses">
                                            Let Students See Their Quiz Responses (Incorrect Questions Will Be Marked in Student Feedback)
                                        </label>
                                    </div>
                                    <div className="form-check" style={{marginLeft: "25px"}}>
                                        {/* Did not handle a default value or onChange since this is not a project requirement. */}
                                        <input className="form-check-input" type="checkbox" id="onlyOnce"/>
                                        <label className="form-check-label" htmlFor="onlyOnce">
                                            Only Once After Each Attempt
                                        </label>
                                    </div>
                                    <div className="form-check" style={{marginLeft: "25px"}}>
                                        <input className="form-check-input" type="checkbox" id="correctAnswer" checked={quiz.showCorrectAnswers} onChange={(e) => {dispatch(selectQuiz({ ...quiz, showCorrectAnswers: e.target.checked })); enableShowCorrectAnswers();}}/>
                                        <label className="form-check-label" htmlFor="correctAnswer">
                                            Show Correct Answers
                                        </label>
                                    </div>
                                    <div className="row mb-3" style={{marginLeft: "37px"}}>
                                        <label htmlFor="points" className="col-sm-5 col-form-label">Show Correct Answers at</label>
                                        <div className="col-sm-7">
                                            <input id="showCorrectAnswersDate" className="form-control" type="date" value={quiz.showCorrectAnswersDate} onChange={(e) => dispatch(selectQuiz({ ...quiz, showCorrectAnswersDate: e.target.value }))} disabled={!quiz.showCorrectAnswers}/>
                                        </div>
                                    </div>
                                    <div className="row mb-3" style={{marginLeft: "37px"}}>
                                        <label htmlFor="points" className="col-sm-5 col-form-label">Hide Correct Answers at</label>
                                        <div className="col-sm-7">
                                            <input id="hideCorrectAnswersDate" className="form-control" type="date" value={quiz.hideCorrectAnswersDate} onChange={(e) => dispatch(selectQuiz({ ...quiz, hideCorrectAnswersDate: e.target.value }))}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 offset-sm-4 border wd-border-radius-8px">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="oneQatTime" checked={quiz.oneQuestion} onChange={(e) => dispatch(selectQuiz({ ...quiz, oneQuestion: e.target.checked }))}/>
                                        <label className="form-check-label" htmlFor="oneQatTime">
                                            Show One Question at a Time
                                        </label>
                                    </div>
                                    <div className="form-check" style={{marginLeft: "25px"}}>
                                        <input className="form-check-input" type="checkbox" id="lockQuestions" checked={quiz.lockedQuestions} onChange={(e) => dispatch(selectQuiz({ ...quiz, lockedQuestions: e.target.checked }))}/>
                                        <label className="form-check-label" htmlFor="lockQuestions">
                                            Lock Questions After Answering
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 offset-sm-4">
                                    <b>Quiz Restrictions</b>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 offset-sm-4 border wd-border-radius-8px">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="webcamReq" checked={quiz.webCam} onChange={(e) => dispatch(selectQuiz({ ...quiz, webCam: e.target.checked }))}/>
                                        <label className="form-check-label" htmlFor="webcamReq">
                                            Webcam Required
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 offset-sm-4">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="accessCodeCheckbox" checked={quiz.accessCodeOn} onChange={(e) => {dispatch(selectQuiz({ ...quiz, accessCodeOn: e.target.checked })); createAccessCode();}}/>
                                        <label className="form-check-label" htmlFor="accessCodeCheckbox">
                                            Access Code
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="text" className="form-control" id="accessCodeText" value={quiz.accessCode} onChange={(e) => dispatch(selectQuiz({ ...quiz, accessCode: e.target.value}))} disabled={!quiz.accessCodeOn}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <p className="col-sm-4 col-form-label wd-assign-edit-label">Assign</p>
                                <div className="col-sm-8 border wd-border-radius-8px" id="assign">
                                    <div className="mb-3">
                                        <p className="form-label" style={{paddingTop: "10px"}}><b>Assign to</b></p>
                                        <div className="container p-3 wd-rounded-corners-all-around wd-assign-to-container" id="assignTo">
                                            <button className="btn btn-light btn-outline-dark">Everyone <span className="float-end ps-5"><i className="fa-solid fa-plus"></i></span></button>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="dueDate" className="form-label"><b>Due</b></label>
                                        <input id="dueDate" className="form-control" type="date" value={quiz.dueDate} onChange={(e) => dispatch(selectQuiz({ ...quiz, dueDate: e.target.value }))}/>
                                    </div>
                                    <div className="row g-2">
                                        <div className="col-sm">
                                            <label htmlFor="availableFrom" className="form-label"><b>Available from</b></label>
                                            <input id="availableFrom" className="form-control" type="date" value={quiz.availableFromDate} onChange={(e) => dispatch(selectQuiz({ ...quiz, availableFromDate: e.target.value }))}/>
                                        </div>
                                        <div className="col-sm">
                                            <label htmlFor="untilDate" className="form-label"><b>Until</b></label>
                                            <input id="untilDate" className="form-control" type="date" value={quiz.untilDate} onChange={(e) => dispatch(selectQuiz({ ...quiz, untilDate: e.target.value }))}/>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <button type="button" className="btn btn-light btn-outline-dark wd-add-button"><i className="fa-solid fa-plus"></i>Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </Tab>
                <Tab eventKey="questions" title="Questions">
                    Tab content for Questions
                </Tab>
            </Tabs>

            <hr/>
            <div className="row form-check">
                <label className="col-3 form-check-label" htmlFor="gridCheck2">
                    {/* Did not handle a default value or onChange since this is not a project requirement. */}
                    <input className="form-check-input" type="checkbox" id="gridCheck2"/>
                    Notify users this quiz has changed
                </label>
                <button onClick={handleSave} className="col-3 btn btn-light btn-outline-dark wd-save-button ms-2 float-end" style={{width: "max-content"}}>Save</button>
                <button onClick={handleSaveAndPub} className="col-3 btn btn-light btn-outline-dark wd-cancel-savepub-button ms-2 float-end" style={{width: "max-content"}}>Save & Publish</button>
                <Link to={`/Kanbas/Courses/${courseId}/Quizzes`} className="col-3 btn btn-light btn-outline-dark wd-cancel-savepub-button float-end" style={{width: "max-content"}}>Cancel</Link>
            </div>
            <hr style={{marginTop: "30px"}}/>
        </div>
    );
}
export default QuizDetailsEditor;