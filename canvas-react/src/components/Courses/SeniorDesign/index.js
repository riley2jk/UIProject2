import { NavLink } from "react-router-dom";
import "./index.scss";

const SenDes = () => {
    return (
        <>
            <div className="title">Senior Design</div>
            <div className="top-nav">
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="nav"
                    to="courses/senior_design/"
                >
                    Home
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="nav"
                    to="assignments"
                >
                    Assignments
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="nav"
                    to="announcements"
                >
                    Announcements
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="nav"
                    to="grades"
                >
                    Grades
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="nav"
                    to="syllabus"
                >
                    Syllabus
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="nav"
                    to="files"
                >
                    Files
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="nav"
                    to="zoom"
                >
                    Zoom
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="nav"
                    to="echo360"
                >
                    Echo360
                </NavLink>
            </div>
        </>
    );
};

export default SenDes;
