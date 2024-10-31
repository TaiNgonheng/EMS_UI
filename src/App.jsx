import ListEmployeeComponent from "./components/ListEmployeeComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import './App.css'
export default function App(){
    return (
        <>
            <HeaderComponent/>
            <ListEmployeeComponent/>
            <FooterComponent/>
        </>
    );
}