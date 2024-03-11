function ChildStateComponent({ counter, setCounter }:{ counter: number; setCounter: (counter: number) => void;}) {
    return (
        <div>
            <h4>Counter {counter}</h4>
            <button className="btn btn-primary me-2 mb-2" onClick={() => setCounter(counter + 1)}>Increment</button>
            <button className="btn btn-primary mb-2" onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    );
}
export default ChildStateComponent;