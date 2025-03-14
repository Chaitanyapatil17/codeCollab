import React, { useState, useEffect } from "react";
import socket from "../socket"; // Import socket instance

const CodeEditor = () => {
    const [code, setCode] = useState("");

    useEffect(() => {
        socket.on("codeUpdate", (newCode) => {
            setCode(newCode);
        });

        return () => {
            socket.off("codeUpdate");
        };
    }, []);

    const handleCodeChange = (e) => {
        setCode(e.target.value);
        socket.emit("codeChange", e.target.value);
    };

    return (
        <div>
            <h2>Code Editor</h2>
            <textarea
                value={code}
                onChange={handleCodeChange}
                rows="10"
                cols="50"
                placeholder="Type your code here..."
            />
        </div>
    );
};

export default CodeEditor;
