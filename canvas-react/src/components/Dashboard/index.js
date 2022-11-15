import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div className="title">Dashboard</div>
            <div className="flex-container">
                <div className="dash-left-container">
                    <div className="content-container">
                        <div className="header-container">
                            <h2 className="header title-text">
                                Recent Announcements
                            </h2>
                        </div>
                        <div className="ind-content">
                            <FontAwesomeIcon
                                icon={faBullhorn}
                                color="#000000"
                            />
                            <h2 className="ind title-text">
                                Make Your Own Groups
                            </h2>
                            <div className="ind-det">
                                <span className="id-text">
                                    User Interface Design
                                </span>
                                <span className="id-text">
                                    Posted On: Sep 5, 2022, 8:02 pm
                                </span>
                            </div>
                        </div>
                        <div className="ind-content">
                            <FontAwesomeIcon
                                icon={faBullhorn}
                                color="#000000"
                            />
                            <h2 className="ind title-text">Exam Next Week</h2>
                            <div className="ind-det">
                                <span className="id-text">
                                    User Interface Design
                                </span>
                                <span className="id-text">
                                    Posted On: Sep 5, 2022, 3:37 pm
                                </span>
                            </div>
                        </div>
                        <div className="ind-content">
                            <FontAwesomeIcon
                                icon={faBullhorn}
                                color="#000000"
                            />
                            <h2 className="ind title-text">
                                Computer Graphics Week 2 Announcements
                            </h2>
                            <div className="ind-det">
                                <span className="id-text">
                                    Computer Graphics
                                </span>
                                <span className="id-text">
                                    Posted On: Sep 5, 2022, 3:34 pm
                                </span>
                            </div>
                        </div>
                        <div className="ind-content">
                            <FontAwesomeIcon
                                icon={faBullhorn}
                                color="#000000"
                            />
                            <h2 className="ind title-text">
                                Senior Design Week 1 Announcements
                            </h2>
                            <div className="ind-det">
                                <span className="id-text">Senior Design</span>
                                <span className="id-text">
                                    Posted On: Sep 3, 2022, 12:10 pm
                                </span>
                            </div>
                        </div>
                        <div className="ind-content">
                            <FontAwesomeIcon
                                icon={faBullhorn}
                                color="#000000"
                            />
                            <h2 className="ind title-text">
                                Computer Graphics Week 1 Announcements
                            </h2>
                            <div className="ind-det">
                                <span className="id-text">
                                    Computer Graphics
                                </span>
                                <span className="id-text">
                                    Posted On: Aug 28, 2022, 1:31 pm
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="header-container">
                            <h2 className="header title-text">
                                Upcoming Assignments
                            </h2>
                        </div>
                        <Link
                            className="ind-content link"
                            to="courses/computer_graphics/assignment_01"
                        >
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                color="#000000"
                            />
                            <h2 className="ind title-text">
                                Assignment 01 - First Assignment
                            </h2>
                            <div className="ind-det">
                                <span className="id-text">
                                    Computer Graphics
                                </span>
                                <span className="id-text">
                                    Due: Aug 29, 2022, 11:59 pm
                                </span>
                            </div>
                        </Link>
                        <div className="ind-content">
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                color="#000000"
                            />
                            <h2 className="ind title-text">
                                Assignment 01 - Getting to Know You
                            </h2>
                            <div className="ind-det">
                                <span className="id-text">
                                    User Interface Design
                                </span>
                                <span className="id-text">
                                    Due: Sep 5, 2022, 3:34 pm
                                </span>
                            </div>
                        </div>
                        <div className="ind-content">
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                color="#000000"
                            />
                            <h2 className="ind title-text">
                                Assignment 02 - Sketching Practice
                            </h2>
                            <div className="ind-det">
                                <span className="id-text">
                                    User Interface Design
                                </span>
                                <span className="id-text">
                                    Due: Sep 7, 2022, 11:59 pm
                                </span>
                            </div>
                        </div>
                        <Link
                            className="ind-content link"
                            to="courses/computer_graphics/assignment_02"
                        >
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                color="#000000"
                            />
                            <h2 className="ind title-text">
                                Assignment 02 - Linear Algebra Review
                            </h2>
                            <div className="ind-det">
                                <span className="id-text">
                                    Computer Graphics
                                </span>
                                <span className="id-text">
                                    Due: Sep 9, 2022, 11:59 pm
                                </span>
                            </div>
                        </Link>
                        <div className="ind-content">
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                color="#000000"
                            />
                            <h2 className="ind title-text">
                                Assignment 03 - Tasks
                            </h2>
                            <div className="ind-det">
                                <span className="id-text">Senior Design</span>
                                <span className="id-text">
                                    Due: Sep 10, 2022, 11:59 pm
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dash-right-container mgn-415 mw">
                    <div className="content-container">
                        <div className="header-container">
                            <h2 className="header title-text">Grades</h2>
                        </div>
                        <Link
                            className="ind-content link"
                            to="courses/computer_graphics/grades"
                        >
                            <h2 className="ind title-text">
                                Computer Graphics
                            </h2>
                            <div className="ind-det">
                                <span className="id-text">Overall Grade:</span>
                                <span className="id-text">82%</span>
                            </div>
                        </Link>
                        <div className="ind-content">
                            <h2 className="ind title-text">Senior Design</h2>
                            <div className="ind-det">
                                <span className="id-text">Overall Grade:</span>
                                <span className="id-text">100%</span>
                            </div>
                        </div>
                        <div className="ind-content">
                            <h2 className="ind title-text">
                                User Interface Design
                            </h2>
                            <div className="ind-det">
                                <span className="id-text">Overall Grade:</span>
                                <span className="id-text">86%</span>
                            </div>
                        </div>
                    </div>
                    <div className="content-container">
                        <Link className="header-container link" to="groups">
                            <h2 className="header title-text">Groups</h2>
                        </Link>
                        <div className="ind-content">
                            <h2 className="ind title-text">Duo Queue</h2>
                            <div className="ind-det">
                                <span className="id-text">
                                    User Interface Design
                                </span>
                                <span className="id-text">2 Members</span>
                            </div>
                        </div>
                        <div className="ind-content">
                            <h2 className="ind title-text">VRacer</h2>
                            <div className="ind-det">
                                <span className="id-text">Senior Design</span>
                                <span className="id-text">5 Members</span>
                            </div>
                        </div>
                        <div className="ind-content">
                            <h2 className="ind title-text">Lab Group 4</h2>
                            <div className="ind-det">
                                <span className="id-text">
                                    Computer Graphics
                                </span>
                                <span className="id-text">3 Members</span>
                            </div>
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="header-container">
                            <h2 className="header title-text">
                                Semester Countdown
                            </h2>
                        </div>
                        <div className="ind-content">
                            <h2 className="ind title-text">
                                98 Days Left in Semester
                            </h2>
                        </div>
                        <div className="ind-content">
                            <h2 className="ind title-text">
                                17 Days until Next Holiday
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
