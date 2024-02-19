function IfElse() {
    let true1 = true, false1 = false;
    return(
       <div>
         <h5>If Else</h5>
         { true1 && <p>true1</p> }
         { !false1 ? <p>!false1</p> : <p>false1</p> }
       </div>
    );   
}
export default IfElse