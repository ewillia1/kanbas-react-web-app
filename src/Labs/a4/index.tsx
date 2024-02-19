import ClickEvent from "./ClickEvent";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";

function Assignment4() {
    function sayHello() {
        alert("Hello");
    }
    
    return (
        <div className="container">
            <h2>Assignment 4</h2>
            <ClickEvent/>
            <PassingDataOnEvent/>
            <PassingFunctions theFunction={sayHello}/>
            <EventObject/>
        </div>
    );
}
export default Assignment4;