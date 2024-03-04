import { useNavigate, useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import "./index.css";
import { addQuiz, selectQuiz, updateQuiz } from "../quizzesReducer";        // Import reducer functions to add, delete, and update quizzes.
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
import { useEffect, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FiSlash } from "react-icons/fi";

function QuizDetailsEditor() {
    const { courseId } = useParams();
    console.log("courseId = " + courseId);
    const { quizId } = useParams();
    console.log("quizId = " + quizId);
    const quizList = useSelector((state: KanbasState) => state.quizzesReducer.quizzes);  // Retrieve current state variables modules and module from reducer.
    const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz);
    const [shuffleAnswersCheck, setShuffleAnswersChecked] = useState(true);
    const [timeLimitCheck, setTimeLimitChecked] = useState(true);
    const [multipleAttemptsCheck, setMultipleAttemptsChecked] = useState(false);
    const [quizMinText, setQuizMinText] = useState("20");
    const [correctAnswerCheck, setCorrectAnswerChecked] = useState(false);
    const [accessCodeCheck, setAccessCodeChecked] = useState(false);
    const [accessCodeText, setAccessCodeText] = useState("");
    const [oneQatTimeCheck, setOneQatTimeChecked] = useState(true);
    const [webcamReqCheck, setWebcamReqChecked] = useState(false);
    const [lockQuestionsCheck, setLockQuestionsChecked] = useState(false);
    
    const dispatch = useDispatch();             // Get dispatch to call reducer functions.
    const navigate = useNavigate();
    
    // If user is coming from clicking add quiz, set values to default values.
    // Else the user is coming from clicking an old quiz, so set values to the values of the quiz clicked.
    // Only run the effect on the initial render.
    useEffect(() => {
        // Runs only on the first render.
        if ( quizId !== undefined ) {
            if (quizId.localeCompare("DetailsEditor")) {
                const a = quizList.find((quiz) => quiz._id === quizId);
                dispatch(selectQuiz(a));
            }
        }
    }, []);
    
    function handleSave() {
        console.log("In handleSave.");
        console.log("quiz being added/edited = " + JSON.stringify(quiz));
        if (quizId !== undefined) {
            if (!quizId.localeCompare("DetailsEditor")) {
                dispatch(addQuiz({ ...quiz, course: courseId }));
            } else {
                dispatch(updateQuiz(quiz));
            }
        }
        navigate(`/Kanbas/Courses/${courseId}/Quizzes`);
    }

    const [key, setKey] = useState('details');

    function enableMinTextArea() {
        let textBox = document.getElementById("quizMinutesText") as HTMLInputElement;
        let chkbox = document.getElementById("timeLimitCheckbox") as HTMLInputElement;
        if (textBox !== null) {
            if (chkbox !== null) {
                if (chkbox.checked) {
                    setQuizMinText("20");
                } else {
                    setQuizMinText("");
                }
                textBox.disabled = !(chkbox.checked);
            }
        }
    }

    function createAccessCode() {
        let textBox = document.getElementById("accessCodeText") as HTMLInputElement;
        let chkbox = document.getElementById("accessCodeCheckbox") as HTMLInputElement;
        if (textBox !== null) {
            if (chkbox !== null) {
                textBox.disabled = !(chkbox.checked);
            }
        }
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
                            <input type="text" className="form-control" id="quizName" value={quiz?.title} onChange={(e) => dispatch(selectQuiz({ ...quiz, title: e.target.value }))}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="quizInst">Quiz Instructions:</label>
                            <textarea className="form-control" id="quizInst" rows={3} value={quiz?.description} onChange={(e) => dispatch(selectQuiz({ ...quiz, description: e.target.value }))}></textarea>
                        </div>

                        <div className="wd-bottom-section">
                            <div className="row mb-3">
                                <label htmlFor="quizType" className="col-sm-4 col-form-label wd-assign-edit-label">Quiz Type</label>
                                <div className="col-sm-8">
                                    <select className="form-select" id="quizType" name="quizType">
                                        <option>Graded Quiz</option>
                                        <option>Practice Quiz</option>
                                        <option>Graded Survey</option>
                                        <option>Ungraded Survey</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="points" className="col-sm-4 col-form-label wd-assign-edit-label">Points</label>
                                <div className="col-sm-8">
                                    <input type="number" min="0" className="form-control" id="points" value={quiz?.points} onChange={(e) => dispatch(selectQuiz({ ...quiz, points: e.target.value }))}/>
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
                                        <input className="form-check-input" type="checkbox" id="shuffleAnswersId" defaultChecked={shuffleAnswersCheck} onChange={() => setShuffleAnswersChecked((state) => !state)}/>
                                        <label className="form-check-label" htmlFor="shuffleAnswersId">
                                            Shuffle Answers
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 offset-sm-4">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="timeLimitCheckbox" defaultChecked={timeLimitCheck} onChange={() => {setTimeLimitChecked((state) => !state); enableMinTextArea();}}/>
                                        <label className="form-check-label" htmlFor="timeLimitCheckbox">
                                            Time Limit
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="number" className="form-control" id="quizMinutesText" value={quizMinText} onChange={(e) => setQuizMinText(e.target.value)} min="0"/>
                                    </div>
                                    <div className="form-check form-check-inline" style={{padding: "0"}}>
                                        <label className="form-check-label" htmlFor="quizMinutesText">Minutes</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 offset-sm-4 border wd-border-radius-8px">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="multipleAttemptsId" defaultChecked={multipleAttemptsCheck} onChange={() => setMultipleAttemptsChecked((state) => !state)}/>
                                        <label className="form-check-label" htmlFor="multipleAttemptsId">
                                            Allow Multiple Attempts
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 offset-sm-4 border wd-border-radius-8px">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="correctAnswer" defaultChecked={correctAnswerCheck} onChange={() => setCorrectAnswerChecked((state) => !state)}/>
                                        <label className="form-check-label" htmlFor="correctAnswer">
                                            Show Correct Answers
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <div className="row mb-3">
                                <div className="col-sm-12 offset-sm-4">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="accessCodeCheckbox" defaultChecked={accessCodeCheck} onChange={() => {setAccessCodeChecked((state) => !state); createAccessCode();}}/>
                                        <label className="form-check-label" htmlFor="accessCodeCheckbox">
                                            Access Code
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="text" className="form-control" id="accessCodeText" value={accessCodeText} onChange={(e) => setAccessCodeText(e.target.value)} disabled/>
                                    </div>
                                </div>
                            </div>



                            <div className="row mb-3">
                                <div className="col-sm-12 offset-sm-4 border wd-border-radius-8px">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="oneQatTime" defaultChecked={oneQatTimeCheck} onChange={() => setOneQatTimeChecked((state) => !state)}/>
                                        <label className="form-check-label" htmlFor="oneQatTime">
                                            One Question at a Time
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 offset-sm-4 border wd-border-radius-8px">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="webcamReq" defaultChecked={webcamReqCheck} onChange={() => setWebcamReqChecked((state) => !state)}/>
                                        <label className="form-check-label" htmlFor="webcamReq">
                                            Webcam Required
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12 offset-sm-4 border wd-border-radius-8px">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="lockQuestions" defaultChecked={lockQuestionsCheck} onChange={() => setLockQuestionsChecked((state) => !state)}/>
                                        <label className="form-check-label" htmlFor="lockQuestions">
                                            Lock Questions After Answering
                                        </label>
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
                                        <input id="dueDate" className="form-control" type="date" value={quiz?.dueDate} onChange={(e) => dispatch(selectQuiz({ ...quiz, dueDate: e.target.value }))}/>
                                    </div>
                                    <div className="row g-2">
                                        <div className="col-sm">
                                            <label htmlFor="availableFrom" className="form-label"><b>Available from</b></label>
                                            <input id="availableFrom" className="form-control" type="date" value={quiz?.availableFromDate} onChange={(e) => dispatch(selectQuiz({ ...quiz, availableFromDate: e.target.value }))}/>
                                        </div>
                                        <div className="col-sm">
                                            <label htmlFor="untilDate" className="form-label"><b>Until</b></label>
                                            <input id="untilDate" className="form-control" type="date" value={quiz?.untilDate} onChange={(e) => dispatch(selectQuiz({ ...quiz, untilDate: e.target.value }))}/>
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
                    <input className="form-check-input" type="checkbox" id="gridCheck2"/>
                    Notify users this quiz has changed
                </label>
                <button onClick={handleSave} className="col-3 btn btn-light btn-outline-dark wd-save-button ms-2 float-end" style={{width: "max-content"}}>Save</button>
                <button onClick={handleSave} className="col-3 btn btn-light btn-outline-dark wd-cancel-savepub-button ms-2 float-end" style={{width: "max-content"}}>Save & Publish</button>
                <Link to={`/Kanbas/Courses/${courseId}/Quizzes`} className="col-3 btn btn-light btn-outline-dark wd-cancel-savepub-button float-end" style={{width: "max-content"}}>Cancel</Link>
            </div>
            <hr style={{marginTop: "30px"}}/>
        </div>
    );
}
export default QuizDetailsEditor