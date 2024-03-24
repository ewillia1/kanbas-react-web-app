import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { PiPencilLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { KanbasState, QuizType } from "../../../store";
import { FiSlash } from "react-icons/fi";
import { useEffect } from "react";
import { selectQuiz, updateQuiz } from "../quizzesReducer";        // Import reducer functions to add, delete, and update quizzes.
import { getDateObject } from "../../../Util/dateUtil";

function QuizDetails() {
    const { courseId } = useParams();
    const { quizId } = useParams();
    const quizListFromReducer = useSelector((state: KanbasState) => state.quizzesReducer.quizzes);  // Retrieve current state variables quizzes from reducer.
    const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz);

    const dispatch = useDispatch();             // Get dispatch to call reducer functions.
    const navigate = useNavigate();

    function handleEditQuiz() {
        navigate(`/Kanbas/Courses/${courseId}/Quizzes/DetailsEditor/${quiz._id}`);
    }

    function viewPreview() {
        navigate(`/Kanbas/Courses/${courseId}/Quizzes/Preview/${quiz._id}`);
    }

    // If user is coming from clicking add quiz, set values to default values.
    // Else the user is coming from clicking an old quiz, so set values to the values of the quiz clicked.
    // Only run the effect on the initial render.
    useEffect(() => {
        // Runs only on the first render.
        if ( quizId !== undefined ) {
            console.log("quizId = " + quizId);
            if (quizId.localeCompare("QuizDetails") === 0) {
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
            } else {
                const a = quizListFromReducer.find((quiz) => quiz._id === quizId);
                dispatch(selectQuiz(a));
            }
        }
    }, []);

    function pubUnpub(quiz: QuizType) {
        const updatedQuiz = {...quiz, published: !quiz.published};  
        dispatch(updateQuiz(updatedQuiz));
    }
    
    return(
        <>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                {quiz.published ? <button type="button" className="btn btn-light btn-outline-dark mt-1" onClick={() => pubUnpub(quiz)} style={{backgroundColor: "green", color: "white"}}><FaCheckCircle />Published</button> : <button type="button" className="btn btn-light btn-outline-dark mt-1" onClick={() => pubUnpub(quiz)}><FiSlash />Unpublished</button>}
                <button type="button" className="btn btn-light btn-outline-dark mt-1" onClick={viewPreview}>Preview</button>
                <button type="button" className="btn btn-light btn-outline-dark mt-1" onClick={handleEditQuiz}><PiPencilLight style = {{transform: 'rotate(270deg)'}} />Edit</button>
                <button type="button" className="btn btn-light btn-outline-dark mt-1"><FaEllipsisV /></button>
            </div>
            <hr/>

            <h1>{quiz.title}</h1>

            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Quiz Type</b></label>
                <label className="col">{quiz.quizType}</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Points</b></label>
                <label className="col">{quiz.points}</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Assignment Group</b></label>
                <label className="col">{quiz.assignmentGroup}</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Shuffle Answers</b></label>
                <label className="col">{quiz.shuffle ? "Yes" : "No"}</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Time Limit</b></label>
                <label className="col">{quiz.timeLimit ? quiz?.time : "None"} {quiz.timeLimit && quiz?.time !== undefined ? parseInt(quiz?.time) < 2 ? "Minute" : "Minutes" : ""}</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Multiple Attempts</b></label>
                <label className="col">{quiz.multipleAttempts ? "Yes" : "No"}</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>View Responses</b></label>
                <label className="col">{quiz.viewResponses ? "Always" : "Never"}</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Show Correct Answers</b></label>
                <label className="col">{quiz.showCorrectAnswers ? getDateObject(quiz.showCorrectAnswersDate).toDateString() : "No"}</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>One Question at a Time</b></label>
                <label className="col">{quiz.oneQuestion ? "Yes" : "No"}</label>
            </div>
            {/* This value is not assigned. So it is always going to show No. */}
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Require Respondus LockDown Browser</b></label>
                <label className="col">No</label>
            </div>
            {/* This value is not assigned. So it is always going to show No. */}
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Required to View Quiz Results</b></label>
                <label className="col">No</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Webcam Required</b></label>
                <label className="col">{quiz.webCam ? "Yes" : "No"}</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Lock Questions After Answering</b></label>
                <label className="col">{quiz.lockedQuestions ? "Yes" : "No"}</label>
            </div>

            <table className="table" style={{marginTop: "40px"}}>
                <thead>
                    <tr>
                    <th scope="col">Due</th>
                    <th scope="col">For</th>
                    <th scope="col">Available from</th>
                    <th scope="col">Until</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{getDateObject(quiz.dueDate).toDateString()}</td>
                    <td>{quiz.forAccess}</td>
                    <td>{getDateObject(quiz.availableFromDate).toDateString()}</td>
                    <td>{getDateObject(quiz.untilDate).toDateString()}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
export default QuizDetails;