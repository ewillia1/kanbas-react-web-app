import Labs from "./Labs";      // Imports ./Labs/index.tsx.
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";       // This import statement will first attempt to import a file called Kanbas.tsx, and if it fails it will then attempt to import index.tsx in a folder called Kanbas, e.g., Kanbas/index.tsx, which is what we have here.
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (                    // Return can only return a single component. That is why we wrap the whole content with a <div>.
        <HashRouter>
            <Routes>
                <Route path="/" element={ <Navigate to="Labs/a3"/>}></Route>
                <Route path="/Labs/*" element={<Labs/>}></Route>
                <Route path="/Kanbas/*" element={<Kanbas/>}></Route>
                <Route path="/hello" element={<HelloWorld/>}></Route>
            </Routes>
        </HashRouter>
    );
}
export default App;