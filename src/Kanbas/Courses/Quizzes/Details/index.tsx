import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { PiPencilLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { KanbasState } from "../../../store";
import { FiSlash } from "react-icons/fi";
import { useEffect, useState } from "react";
import { selectQuiz } from "../quizzesReducer";        // Import reducer functions to add, delete, and update quizzes.

function QuizDetails() {
    const { courseId } = useParams();
    console.log("courseId = " + courseId);
    const { quizId } = useParams();
    console.log("quizId = " + quizId);
    const quizListFromReducer = useSelector((state: KanbasState) => state.quizzesReducer.quizzes);  // Retrieve current state variables quizzes from reducer.
    const quiz = useSelector((state: KanbasState) => state.quizzesReducer.quiz);
    console.log("quiz = " + JSON.stringify(quiz));
    console.log("first quiz?.published = " + quiz?.published);
    const [publishQuiz, setPublishQuiz] = useState<boolean | undefined>(quiz?.published);
    console.log("first publishQuiz = " + publishQuiz);

    const dispatch = useDispatch();             // Get dispatch to call reducer functions.
    const navigate = useNavigate();

    function handleEditQuiz() {
        console.log("In handleEditQuiz");
        navigate(`/Kanbas/Courses/${courseId}/Quizzes/DetailsEditor/DetailsEditor`);
    }

    // If user is coming from clicking add quiz, set values to default values.
    // Else the user is coming from clicking an old quiz, so set values to the values of the quiz clicked.
    // Only run the effect on the initial render.
    useEffect(() => {
        // Runs only on the first render.
        if ( quizId !== undefined ) {
            console.log("quizId = " + quizId);
            if (quizId.localeCompare("QuizDetails")) {
                const a = quizListFromReducer.find((quiz) => quiz._id === quizId);
                dispatch(selectQuiz(a));
                setPublishQuiz(a?.published);
            }
        }
    }, []);

    function pubUnpub() {
        setPublishQuiz(!publishQuiz);
        console.log("Clicked publish/unpublish button -- publishQuiz = " + publishQuiz);
    }
    
    return(
        <>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">

                {/* TODO: Clicking Publish button changes Unpublished to Published, etc. */}
                {publishQuiz ? <button type="button" className="btn btn-light btn-outline-dark mt-1" onClick={pubUnpub} style={{backgroundColor: "green", color: "white"}}><FaCheckCircle />Published</button> : <button type="button" className="btn btn-light btn-outline-dark mt-1" onClick={pubUnpub}><FiSlash />Unpublished</button>}

                {/* TODO: Click Preview button to navigate to Quiz Preview. */}
                <button type="button" className="btn btn-light btn-outline-dark mt-1">Preview</button>

                <button type="button" className="btn btn-light btn-outline-dark mt-1" onClick={handleEditQuiz}><PiPencilLight style = {{transform: 'rotate(270deg)'}} />Edit</button>
                <button type="button" className="btn btn-light btn-outline-dark mt-1"><FaEllipsisV /></button>
            </div>
            <hr/>

            <h1>{quiz?.title}</h1>

            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Quiz Type</b></label>
                <label className="col">Graded Quiz</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Points</b></label>
                <label className="col">{quiz?.points}</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Assignment Group</b></label>
                <label className="col">QUIZZES</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Shuffle Answers</b></label>
                <label className="col">No</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Time Limit</b></label>
                <label className="col">30 Minutes</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Multiple Attempts</b></label>
                <label className="col">No</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>View Responses</b></label>
                <label className="col">Always</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Show Correct Answers</b></label>
                <label className="col">Immediately</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>One Question at a Time</b></label>
                <label className="col">Yes</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Require Respondus LockDown Browser</b></label>
                <label className="col">No</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Required to View Quiz Results</b></label>
                <label className="col">No</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Webcam Required</b></label>
                <label className="col">No</label>
            </div>
            <div className="row mb-3">
                <label className="col" style={{textAlign: "right"}}><b>Lock Questions After Answering</b></label>
                <label className="col">No</label>
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
                    <td>{quiz?.dueDate}</td>
                    <td>{quiz?.forAccess}</td>
                    <td>{quiz?.availableFromDate}</td>
                    <td>{quiz?.untilDate}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
export default QuizDetails