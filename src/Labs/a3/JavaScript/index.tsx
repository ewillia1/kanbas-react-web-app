import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import MapFunction from "./arrays/MapFunction";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import ImpliedReturn from "./functions/ImpliedReturn";
import BooleanVariables from "./variables/BooleanVariables";
import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants from "./variables/VariablesAndConstants";

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
            <h4>Working with arrays</h4>
            <ArrayIndexAndLength/>
            <MapFunction/>
        </div>
    );
}
export default JavaScript