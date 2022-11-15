import "./index.scss";

const Groups = () => {
    return (
        <>
            <div className="title">Groups</div>
            <div className="content-container mgn-425">
                <div className="header-container">
                    <h2 className="header title-text">Groups</h2>
                </div>
                <div className="ind-content">
                    <h2 className="ind title-text">Duo Queue</h2>
                    <div className="ind-det">
                        <span className="id-text">User Interface Design</span>
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
                        <span className="id-text">Computer Graphics</span>
                        <span className="id-text">3 Members</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Groups;
