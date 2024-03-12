import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";
import "./index.css";

function Assignment5() {
    return (
        <div className="container">
            <h2>Assignment 5</h2>
            <div className="wd-container wd-border wd-round-xlarge">
                <a href="http://localhost:4000/a5/welcome" style={{textDecoration: "none", color: "black"}} >
                    Welcome
                </a>
            </div>
            <EncodingParametersInURLs/>
            <WorkingWithObjects/>
            <WorkingWithArrays/>
        </div>
    );
}
export default Assignment5;