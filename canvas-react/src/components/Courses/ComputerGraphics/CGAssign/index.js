import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPenToSquare,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

const CGAssign = () => {
    return (
        <>
            <div className="header-container">
                <h1>Assignments</h1>
                <div className="search-container">
                    <span className="search-text">Search for Files</span>
                    <div className="search-enter">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            color="#a0a0a0"
                        />
                    </div>
                </div>
            </div>
            <div className="content-container mgn-415">
                <div className="header-container">
                    <h2 className="header title-text">Overdue Assignments</h2>
                </div>
                <Link
                    className="ind-content link"
                    to="/courses/computer_graphics/assignment_01"
                >
                    <FontAwesomeIcon icon={faPenToSquare} color="#000000" />
                    <h2 className="ind title-text">
                        Assignment 01 - First Assignment
                    </h2>
                    <div className="ind-det">
                        <span className="id-text">Due Aug 29 at 11:59 pm</span>
                        <span className="id-text">-/10 pts</span>
                    </div>
                </Link>
            </div>
            <div className="content-container mgn-415">
                <div className="header-container">
                    <h2 className="header title-text">Upcoming Assignments</h2>
                </div>
                <Link
                    className="ind-content link"
                    to="/courses/computer_graphics/assignment_02"
                >
                    <FontAwesomeIcon icon={faPenToSquare} color="#000000" />
                    <h2 className="ind title-text">
                        Assignment 02 - Linear Algebra Review
                    </h2>
                    <div className="ind-det">
                        <span className="id-text">Due Sep 9 at 11:59 pm</span>
                        <span className="id-text">-/10 pts</span>
                    </div>
                </Link>
            </div>
            <Outlet />
        </>
    );
};

export default CGAssign;
