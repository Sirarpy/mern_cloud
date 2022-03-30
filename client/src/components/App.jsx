import Navbar from "./navbar/Navbar";
import './app.scss'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Registration from "./registration/Registration";
import Login from "./login/Login";

const App = () => {
    return (
        <div>
            <div className="app">
                <Navbar/>
                <BrowserRouter>
                    <Routes>
                        {/*<Route path="/" element={<Registration/>}/>*/}
                        <Route path="/registration" element={<Registration/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
