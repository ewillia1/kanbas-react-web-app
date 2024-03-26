import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./index.css";
import CourseDetails from "./CourseDetails";
import CourseNavigation from "./CourseNavigation";

function Settings() {
    const [key, setKey] = useState('courseDetails');

    return(
        <Tabs id="settings-tab" className="mb-3" activeKey={key} onSelect={(k: any) => setKey(k)}>
            <Tab eventKey="courseDetails" title="Course Details">
                <CourseDetails/>
            </Tab>
            <Tab eventKey="sections" title="Sections">
                Sections
            </Tab>
            <Tab eventKey="navigation" title="Navigation">
                <CourseNavigation/>
            </Tab>
            <Tab eventKey="apps" title="Apps">
                Apps
            </Tab>
            <Tab eventKey="featureOptions" title="Feature Options">
                Feature Options
            </Tab>
            <Tab eventKey="integrations" title="Integrations">
                Integrations
            </Tab>
        </Tabs>
    );
}
export default Settings;