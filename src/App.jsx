import ListEmployeeComponent from "./components/ListEmployeeComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import EmployeeComponent from "./components/EmployeeComponent.jsx";
export default function App(){
    return (
        <>
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<ListEmployeeComponent/>}></Route>
                    <Route path='/employee' element={<ListEmployeeComponent/>}></Route>
                    <Route path='/addEmployee' element={<EmployeeComponent/>}></Route>
                    <Route path='/editEmployee/:id' element={<EmployeeComponent/>}></Route>
                </Routes>
                <FooterComponent/>
            </BrowserRouter>
        </>
    );
}