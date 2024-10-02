import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { ChatProvider } from "./ChatContext";
import List from "./components/List/List";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <ChatProvider>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <div className="app">
                    <List />
                    <Main />
                    <ToastContainer />
                  </div>
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to={"/login"} />} />
          </Routes>
        </div>
      </Router>
    </ChatProvider>
  );
}

export default App;
