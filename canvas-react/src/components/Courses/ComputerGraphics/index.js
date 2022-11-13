import { NavLink, Outlet } from "react-router-dom";
import "./index.scss";

const CompGraph = () => {
    return (
        <>
            <div className="title">Computer Graphics</div>
            <div className="top-nav">
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="nav"
                    to="/courses/computer_graphics/"
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
                    to="pages"
                >
                    Pages
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
            <Outlet />
        </>
    );
};

export default CompGraph;
