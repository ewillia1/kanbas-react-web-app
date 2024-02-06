// import React from 'react';
import Labs from "./Labs";      // Imports ./Labs/index.tsx.
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";;       // This import statement will first attempt to import a file called Kanbas.tsx, and if it fails it will then attempt to import index.tsx in a folder called Kanbas, e.g., Kanbas/index.tsx, which is what we have here.

function App() {
    return (                    // Return can only return a single component.
        <div>                   {/* That is why we wrap the whole content with a <div> */ }
            <Labs/>
            <Kanbas/>
            <HelloWorld/>
        </div>
    );
}
export default App;