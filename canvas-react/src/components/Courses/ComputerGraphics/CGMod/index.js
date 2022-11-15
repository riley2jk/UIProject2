import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileAlt,
    faPenToSquare,
    faPersonChalkboard,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CGMod = () => {
    return (
        <>
            <div className="header-container">
                <h1 className="big-title">Modules</h1>
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
            <div className="content-container mgn-425">
                <div className="header-container">
                    <h2 className="header title-text">
                        Module 1 - Foundations
                    </h2>
                </div>
                <div className="ind-content">
                    <FontAwesomeIcon
                        icon={faPersonChalkboard}
                        color="#000000"
                    />
                    <h2 className="ind title-text">
                        What is computer graphics
                    </h2>
                    <div className="ind-det">
                        <span className="id-text">Posted On: Aug 22</span>
                        <span className="id-text">1/1 pts</span>
                    </div>
                </div>
                <div className="ind-content">
                    <FontAwesomeIcon
                        icon={faPersonChalkboard}
                        color="#000000"
                    />
                    <h2 className="ind title-text">
                        Computer graphics pipeline
                    </h2>
                    <div className="ind-det">
                        <span className="id-text">Posted On: Aug 24</span>
                        <span className="id-text">1/1 pts</span>
                    </div>
                </div>
                <div className="ind-content">
                    <FontAwesomeIcon
                        icon={faPersonChalkboard}
                        color="#000000"
                    />
                    <h2 className="ind title-text">
                        Computer graphics hardware
                    </h2>
                    <div className="ind-det">
                        <span className="id-text">Posted On: Aug 26</span>
                        <span className="id-text">1/1 pts</span>
                    </div>
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
            <div className="content-container mgn-425">
                <div className="header-container">
                    <h2 className="header title-text">
                        Module 2 - Linear Algebra
                    </h2>
                </div>
                <div className="ind-content">
                    <FontAwesomeIcon
                        icon={faPersonChalkboard}
                        color="#000000"
                    />
                    <h2 className="ind title-text">Linear Algebra p1</h2>
                    <div className="ind-det">
                        <span className="id-text">Posted On: Aug 29</span>
                        <span className="id-text">1/1 pts</span>
                    </div>
                </div>
                <div className="ind-content">
                    <FontAwesomeIcon icon={faFileAlt} color="#000000" />
                    <h2 className="ind title-text">Intro</h2>
                    <div className="ind-det">
                        <span className="id-text">Posted On: Aug 29</span>
                        <span className="id-text">1/1 pts</span>
                    </div>
                </div>
                <div className="ind-content">
                    <FontAwesomeIcon icon={faFileAlt} color="#000000" />
                    <h2 className="ind title-text">Vectors</h2>
                    <div className="ind-det">
                        <span className="id-text">Posted On: Aug 29</span>
                        <span className="id-text">1/1 pts</span>
                    </div>
                </div>
                <div className="ind-content">
                    <FontAwesomeIcon
                        icon={faPersonChalkboard}
                        color="#000000"
                    />
                    <h2 className="ind title-text">Linear Algebra p2</h2>
                    <div className="ind-det">
                        <span className="id-text">Posted On: Aug 31</span>
                        <span className="id-text">1/1 pts</span>
                    </div>
                </div>
                <div className="ind-content">
                    <FontAwesomeIcon icon={faFileAlt} color="#000000" />
                    <h2 className="ind title-text">Span</h2>
                    <div className="ind-det">
                        <span className="id-text">Posted On: Aug 31</span>
                        <span className="id-text">1/1 pts</span>
                    </div>
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
        </>
    );
};

export default CGMod;
