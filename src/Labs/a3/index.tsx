import JavaScript from "./JavaScript";
import Classes from "./Classes";
import PathParameters from "./routing/PathParameters";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";

function Assignment3() {
    return(
        <div className="container">
            <h2>Assignment 3</h2>
            <TodoList/>
            <TodoItem/>

            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <PathParameters/>
            <JavaScript/>

            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptatess.
            </Highlight>

            <Add a={3} b={4} />
        </div>
    );
}
export default Assignment3;