import ListEmployeeComponent from "./components/ListEmployeeComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import EmployeeComponent from "./components/EmployeeComponent.jsx";
import ListDepartmentComponent from "./components/ListDepartmentComponent.jsx";
import DepartmentComponent from "./components/DepartmentComponent.jsx";
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
                    <Route path='/department' element={<ListDepartmentComponent/>}></Route>
                    <Route path='/add-department' element={<DepartmentComponent/>}></Route>
                    <Route path='/edit-department/:id' element={<DepartmentComponent/>}></Route>
                </Routes>
                <FooterComponent/>
            </BrowserRouter>
        </>
    );
}