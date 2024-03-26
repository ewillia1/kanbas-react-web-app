import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function AccountNavigation() {
    const links = [ "Notifications", "Profile", "Files", "Settings", "ePortfolios", "Shared_Content", "The_Hub", 
                    "Qwickly_Course_Tools", "Global_Announcements"];
    const { pathname } = useLocation();
    console.log("pathname = " + pathname);

    return(
        <div className="col-md-1 col-lg-1 col-xl-1 d-none d-md-block p-0">
            <div className="wd-account-nav sticky-top" style={{paddingLeft: "4vw"}}>
                <ul id="accountNav" className="wd-navigation">
                    {links.map((link, index) => (
                        <li key={index} className={pathname.includes(link) ? "wd-active wd-nowrap" : "wd-nowrap"}>
                            <Link to={link}>{link.replace("_", " ")}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default AccountNavigation