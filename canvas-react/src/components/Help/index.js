import "./index.scss";

const Help = () => {
    return (
        <>
            <div className="title">Help</div>
            <h1 className="links-title">Useful Links</h1>
            <div className="help-links">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://community.canvaslms.com/t5/Canvas/ct-p/canvas"
                >
                    Search the Canvas Guides
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://cases.canvaslms.com/liveagentchat?chattype=admin"
                >
                    Live Chat with Canvas Support (Faculty)
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://cases.canvaslms.com/liveagentchat?chattype=student"
                >
                    Live Chat with Canvas Support (Students)
                </a>
                <a target="_blank" rel="noreferrer" href="https://kb.uc.edu/">
                    IT@UC Knowledge Base
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://uc.edu/ithelp"
                >
                    IT@UC General IT Service Desk
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://libraries.uc.edu/"
                >
                    UC Libraries
                </a>
            </div>
            <h1>Other Useful Information</h1>
            <p>Canvas Support Hotline (Students): 1 (855) 745-4413</p>
        </>
    );
};

export default Help;
