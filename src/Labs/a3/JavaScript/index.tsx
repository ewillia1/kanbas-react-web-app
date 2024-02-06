
import MapFunction from "./arrays/MapFunction";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import ImpliedReturn from "./functions/ImpliedReturn";
import BooleanVariables from "./variables/BooleanVariables";
import VariableTypes from "./variables/VariableTypes";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./arrays/AddingAndRemovingDataToFromArrays";
import ForLoops from "./arrays/ForLoops";
import JsonStringify from "./arrays/JsonStringify";
import FindFunction from "./arrays/FindFunction";
import FindIndex from "./arrays/FindIndex";
import FilterFunction from "./arrays/FilterFunction";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";

function JavaScript() {
    console.log('Hello World!');
    return(
        <div>
            <h3>JavaScript</h3>
            <VariablesAndConstants/>
            <VariableTypes/>
            <BooleanVariables/>
            <h4>Conditionals</h4>
            <IfElse/>
            <TernaryOperator/>
            <h4>Working with functions</h4>
            <ES5Functions/>
            <ArrowFunctions/>
            <ImpliedReturn/>
            <FunctionParenthesisAndParameters/>
            <h4>Arrays</h4>
            <WorkingWithArrays/>
            <ArrayIndexAndLength/>
            <AddingAndRemovingDataToFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <JsonStringify/>
            <FindFunction/>
            <FindIndex/>
            <FilterFunction/>
            <h4>Strings</h4>
            <TemplateLiterals/>
            <h4>JSON</h4>
            <House/>
            <Spreading/>
            <Destructing/>
            <h4>Functions</h4>
            <FunctionDestructing/>
        </div>
    );
}
export default JavaScript