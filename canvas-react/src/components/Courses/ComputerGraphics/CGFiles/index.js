import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileAlt,
    faPersonChalkboard,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const CGFiles = () => {
    return (
        <>
            <div className="header-container">
                <h1 className="big-title">Files</h1>
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
                <div className="ind-content">
                    <FontAwesomeIcon
                        icon={faPersonChalkboard}
                        color="#000000"
                    />
                    <h2 className="ind title-text">
                        What is computer graphics
                    </h2>
                    <div className="ind-det">
                        <span className="id-text">Posted On:</span>
                        <span className="id-text">Aug 22, 2022</span>
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
                        <span className="id-text">Posted On:</span>
                        <span className="id-text">Aug 24, 2022</span>
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
                        <span className="id-text">Posted On:</span>
                        <span className="id-text">Aug 26, 2022</span>
                    </div>
                </div>
                <div className="ind-content">
                    <FontAwesomeIcon
                        icon={faPersonChalkboard}
                        color="#000000"
                    />
                    <h2 className="ind title-text">Linear Algebra p1</h2>
                    <div className="ind-det">
                        <span className="id-text">Posted On:</span>
                        <span className="id-text">Aug 29, 2022</span>
                    </div>
                </div>
                <div className="ind-content">
                    <FontAwesomeIcon icon={faFileAlt} color="#000000" />
                    <h2 className="ind title-text">Intro</h2>
                    <div className="ind-det">
                        <span className="id-text">Posted On:</span>
                        <span className="id-text">Aug 29, 2022</span>
                    </div>
                </div>
                <div className="ind-content">
                    <FontAwesomeIcon icon={faFileAlt} color="#000000" />
                    <h2 className="ind title-text">Vectors</h2>
                    <div className="ind-det">
                        <span className="id-text">Posted On:</span>
                        <span className="id-text">Aug 29, 2022</span>
                    </div>
                </div>
                <div className="ind-content">
                    <FontAwesomeIcon
                        icon={faPersonChalkboard}
                        color="#000000"
                    />
                    <h2 className="ind title-text">Linear Algebra p2</h2>
                    <div className="ind-det">
                        <span className="id-text">Posted On:</span>
                        <span className="id-text">Aug 31, 2022</span>
                    </div>
                </div>
                <div className="ind-content">
                    <FontAwesomeIcon icon={faFileAlt} color="#000000" />
                    <h2 className="ind title-text">Span</h2>
                    <div className="ind-det">
                        <span className="id-text">Posted On:</span>
                        <span className="id-text">Aug 31, 2022</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CGFiles;
