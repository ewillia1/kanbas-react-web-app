function ES5Functions() {
    function add (a: number, b: number) {       // This can be declared outside of the ES5Functions function too.
        return a + b;
    }
    const twoPlusFour = add(2, 4);
    console.log(twoPlusFour);

    return (
        <>
            <h5>Legacy ES5 functions</h5>
            twoPlusFour = { twoPlusFour }<br />
            add(2, 4) = { add(2, 4) }<br />
        </>
    );    
}
export default ES5Functions