function TernaryOperator() {
    let loggedIn = true;
    return(
        <div>
            <h5>Logged In</h5>
            { loggedIn ? <p>Welcome</p> : <p>Please login</p> }
        </div>
    );
}
export default TernaryOperator