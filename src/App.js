import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Result from "./pages/result";

import styles from "./App.module.scss";

const App = () => {
    return (
        <div className={styles.app}>
            <Router>
                <Routes>
                    <Route path="/" Component={Login}></Route>
                    <Route path="/result" Component={Result}></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
