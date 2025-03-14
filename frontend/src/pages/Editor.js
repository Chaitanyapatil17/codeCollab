import React, { useState, useEffect } from "react";
import { useSocket } from "../context/SocketContext";

const Editor = () => {
  const socket = useSocket();
  const [code, setCode] = useState("");

  useEffect(() => {
    if (!socket) return;

    socket.on("codeUpdate", (updatedCode) => {
      setCode(updatedCode);
    });

    return () => socket.off("codeUpdate");
  }, [socket]);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    if (socket) socket.emit("codeChange", e.target.value);
  };

  return (
    <div>
      <h1>Collaborative Code Editor</h1>
      <textarea
        value={code}
        onChange={handleCodeChange}
        rows="10"
        cols="50"
      ></textarea>
    </div>
  );
};

export default Editor;
