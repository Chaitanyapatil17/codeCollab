import React, { useState, useEffect } from "react";
import socket from "../socket"; // Import socket instance

const CodeEditor = () => {
    const [code, setCode] = useState("");

    useEffect(() => {
        // Listen for real-time code updates
        socket.on("codeUpdate", (newCode) => {
            setCode(newCode);
        });

        return () => {
            socket.off("codeUpdate"); // Cleanup listener
        };
    }, []);

    // Emit code change event
    const handleCodeChange = (e) => {
        setCode(e.target.value);
        socket.emit("codeChange", e.target.value);
    };

    return (
        <textarea
            value={code}
            onChange={handleCodeChange}
            rows="10"
            cols="50"
            placeholder="Type your code here..."
        />
    );
};

export default CodeEditor;
