function Kanbas() {             // Since the Kanbas component consists of an entire application with lots of screens
    return(                     // each implemented in several files, we have decided to use an entire folder to implement
        <div>                   {/* the component. It is common to use the same name for the folder and component name, */}
            <h1>Kanbas</h1>     {/* but it is not required. */}
        </div>
    );
}
export default Kanbas