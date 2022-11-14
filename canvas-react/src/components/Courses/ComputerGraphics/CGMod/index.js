import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileAlt,
    faPenToSquare,
    faPersonChalkboard,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const CGMod = () => {
    return (
        <>
            <div className="header-container">
                <h1>Modules</h1>
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
            <div className="content-container">
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
                <div className="ind-content">
                    <FontAwesomeIcon icon={faPenToSquare} color="#000000" />
                    <h2 className="ind title-text">
                        Assignment 01 - First Assignment
                    </h2>
                    <div className="ind-det">
                        <span className="id-text">Due Aug 29 at 11:59 pm</span>
                        <span className="id-text">-/10 pts</span>
                    </div>
                </div>
            </div>
            <div className="content-container">
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
                <div className="ind-content">
                    <FontAwesomeIcon icon={faPenToSquare} color="#000000" />
                    <h2 className="ind title-text">
                        Assignment 02 - Linear Algebra Review
                    </h2>
                    <div className="ind-det">
                        <span className="id-text">Due Sep 9 at 11:59 pm</span>
                        <span className="id-text">-/10 pts</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CGMod;
