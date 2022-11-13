import {
    faBookOpen,
    faBullhorn,
    faList,
    faPencilSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import { Link } from "react-router-dom";

const Courses = () => {
    return (
        <>
            <div className="title">Courses</div>
            <div className="course-container">
                <Link
                    className="course-button large-container cg"
                    to="computer_graphics"
                >
                    <div className="course-name bck-container cg">
                        <div className="course">Computer Graphics</div>
                    </div>
                    <Link
                        className="sm-container cg"
                        to="computer_graphics/assignments"
                    >
                        <FontAwesomeIcon
                            icon={faPencilSquare}
                            color="#000000"
                        />
                        <div className="upcoming sm-title">Upcoming:</div>
                        <div className="last-text">Assignment 02</div>
                    </Link>
                    <Link
                        className="sm-container cg"
                        to="computer_graphics/grades"
                    >
                        <FontAwesomeIcon icon={faBookOpen} color="#000000" />
                        <div className="grade sm-title">Grade:</div>
                        <div className="last-text">82%</div>
                    </Link>
                    <Link
                        className="sm-container cg"
                        to="computer_graphics/announcements"
                    >
                        <FontAwesomeIcon icon={faBullhorn} color="#000000" />
                        <div className="ann sm-title">Announcements</div>
                    </Link>
                    <Link
                        className="sm-container cg last"
                        to="computer_graphics/syllabus"
                    >
                        <FontAwesomeIcon icon={faList} color="#000000" />
                        <div className="syll sm-title">Syllabus</div>
                    </Link>
                </Link>
                <Link
                    className="course-button large-container sd"
                    to="senior_design"
                >
                    <div className="course-name bck-container sd">
                        <div className="course">Senior Design</div>
                    </div>
                    <Link
                        className="sm-container sd"
                        to="senior_design/assignments"
                    >
                        <FontAwesomeIcon
                            icon={faPencilSquare}
                            color="#000000"
                        />
                        <div className="upcoming sm-title">Upcoming:</div>
                        <div className="last-text">Assignment 04</div>
                    </Link>
                    <Link className="sm-container sd" to="senior_design/grades">
                        <FontAwesomeIcon icon={faBookOpen} color="#000000" />
                        <div className="grade sm-title">Grade:</div>
                        <div className="last-text">100%</div>
                    </Link>
                    <Link
                        className="sm-container sd"
                        to="senior_design/announcements"
                    >
                        <FontAwesomeIcon icon={faBullhorn} color="#000000" />
                        <div className="ann sm-title">Announcements</div>
                    </Link>
                    <Link
                        className="sm-container sd last"
                        to="senior_design/syllabus"
                    >
                        <FontAwesomeIcon icon={faList} color="#000000" />
                        <div className="syll sm-title">Syllabus</div>
                    </Link>
                </Link>
                <Link className="course-button large-container ui" to="ui">
                    <div className="course-name bck-container ui">
                        <div className="course">User Interface Design</div>
                    </div>
                    <Link className="sm-container ui" to="ui/assignments">
                        <FontAwesomeIcon
                            icon={faPencilSquare}
                            color="#000000"
                        />
                        <div className="upcoming sm-title">Upcoming:</div>
                        <div className="last-text">Assignment 03</div>
                    </Link>
                    <Link className="sm-container ui" to="ui/grades">
                        <FontAwesomeIcon icon={faBookOpen} color="#000000" />
                        <div className="grade sm-title">Grade:</div>
                        <div className="last-text">86%</div>
                    </Link>
                    <Link className="sm-container ui" to="ui/announcements">
                        <FontAwesomeIcon icon={faBullhorn} color="#000000" />
                        <div className="ann sm-title">Announcements</div>
                    </Link>
                    <Link className="sm-container ui last" to="ui/syllabus">
                        <FontAwesomeIcon icon={faList} color="#000000" />
                        <div className="syll sm-title">Syllabus</div>
                    </Link>
                </Link>
            </div>
        </>
    );
};

export default Courses;
