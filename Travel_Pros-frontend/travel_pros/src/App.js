///App.js handles routing between pages

import "./index.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Discover from "./components/Discover";
import Login from "./components/Login";





function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/register"
                        element={<Register />}
                    />
                    <Route
                        path="/discover"
                        element={<Discover />}
                    />
                    <Route
                        path="/login"
                        element={<Login to="/login" />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;