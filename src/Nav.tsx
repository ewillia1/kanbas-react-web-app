// The navigation links in the three components: Labs, HelloWorld, and Kanbas.
// It is best implemented as a reusable component, as shown below.
// This component can be imported into the HelloWorld, Labs, and Kanbas components.
import { Link, useLocation } from "react-router-dom";

function Nav() {
    const { pathname } = useLocation();
    return(
        <nav className="nav nav-tabs mt-2">
            <Link to="/Labs/a3" className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}>A3</Link>
            <Link to="/Kanbas"className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}>Kanbas</Link>
            <Link to="/hello" className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}>Hello</Link>
        </nav>
    );
}
export default Nav