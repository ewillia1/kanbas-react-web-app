function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];
    return (
      <>
        <h5>JSON Stringify</h5>
        squares = {JSON.stringify(squares)}
      </>
    );
}
export default JsonStringify