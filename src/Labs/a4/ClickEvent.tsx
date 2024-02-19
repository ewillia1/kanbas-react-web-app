function ClickEvent() {
    const hello = () => {
        alert("Hello World!");
    };

    const lifeIs = (good: string) => {
        alert(`Life is ${good}`);
    };

    return (
        <div>
            <h3>Click Event</h3>
            <button className="btn btn-primary me-2" onClick={hello}>Click Hello</button>
            <button className="btn btn-primary me-2" onClick={() => lifeIs("Good!")}>Click Good</button>
            <button className="btn btn-primary" onClick={() => { hello(); lifeIs("Great!");}}>Click Hello 3</button>
        </div>
    );
}
export default ClickEvent;