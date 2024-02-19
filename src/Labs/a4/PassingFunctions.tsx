function PassingFunctions({ theFunction }: { theFunction: () => void }) {       // Function passed in as a parameter.
    return (
        <div>
            <h2>Passing Functions</h2>
            <button onClick={theFunction} className="btn btn-primary">          {/* Invoking function. */}
                Invoke the Function
            </button>
        </div>
    );
}
export default PassingFunctions;