import "./index.scss";
import { useState } from "react";

const CGAssign2 = () => {
    const [text, setText] = useState("Submit Assignment");
    const [upFile, setUpFile] = useState("");

    function handleSubmitClick() {
        if (text === "Submit Assignment") {
            setText("Submitting...");

            setTimeout(() => {
                setText("Submitted");
            }, 2000);
        }
    }

    function handleUploadClick() {
        if (upFile === "") {
            setUpFile("Assignment_02.pdf");
        }
    }

    return (
        <div className="flex-container">
            <div className="left-container">
                <h2 className="big-title">Assignment 2 description</h2>
                <p>Submit:</p>
                <ol>
                    <li>Your code</li>
                    <li>Video link to your application</li>
                </ol>
            </div>
            <div className="right-container mgn-425">
                <div className="buttons-container">
                    <button
                        className="btn btn-upload"
                        onClick={handleUploadClick}
                    >
                        Upload Files...
                    </button>
                    <button
                        className="btn btn-submit"
                        onClick={handleSubmitClick}
                    >
                        {text}
                    </button>
                </div>
                <p>{upFile}</p>
            </div>
        </div>
    );
};

export default CGAssign2;
