import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CodeEditor from "./pages/CodeEditor";
import { SocketProvider } from "./context/SocketContext"; // Import fixed

function App() {
  return (
    <SocketProvider>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Welcome to CodeCollab!</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/editor" element={<CodeEditor />} />
        </Routes>
      </Router>
    </SocketProvider>
  );
}

export default App;
