import ModuleList from "../Modules/List";
import Status from "../Status";

function Home() {
    return (
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-9">
                <ModuleList />
            </div>
            <div className="col-xl-3 d-none d-xl-block" style={{paddingLeft: "revert-layer"}}>
                <Status/>
            </div>
        </div>
    );
}
export default Home;