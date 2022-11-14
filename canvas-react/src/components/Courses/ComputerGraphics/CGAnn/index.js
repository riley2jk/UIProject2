import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBullhorn,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const CGAnn = () => {
    return (
        <>
            <div className="header-container">
                <h1>Announcements</h1>
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
                    <h2 className="header title-text">Announcements</h2>
                </div>
                <div className="ind-content">
                    <FontAwesomeIcon icon={faBullhorn} color="#000000" />
                    <h2 className="ind title-text">
                        Computer Graphics Week 1 Announcements
                    </h2>
                    <div className="ind-det">
                        <span className="id-text">Posted On:</span>
                        <span className="id-text">Aug 28, 2022, 1:31 pm</span>
                    </div>
                </div>
                <div className="ind-content">
                    <FontAwesomeIcon icon={faBullhorn} color="#000000" />
                    <h2 className="ind title-text">
                        Computer Graphics Week 2 Announcements
                    </h2>
                    <div className="ind-det">
                        <span className="id-text">Posted On:</span>
                        <span className="id-text">Sep 5, 2022, 3:34 pm</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CGAnn;
