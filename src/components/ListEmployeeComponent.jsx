import React,{useEffect, useState} from 'react'
import {deleteEmployee, listEmployees} from "../services/EmployeeService.jsx";
import {useNavigate} from "react-router-dom";

const ListEmployeeComponent = () => {

    const [employees, setEmployee] = useState([])
    const navigator = useNavigate();

    useEffect(()=>{
        getAllEmployees();
    }, [])

    function getAllEmployees(){
        listEmployees().then((response)=>
        {setEmployee(response.data);
        }).catch(error=>{
            console.error(error);
        })
    }
    function addNewEmployee(){
        navigator('/addEmployee')
    }
    function updateEmployee(id){
        navigator(`/editEmployee/${id}`)
    }
    function removeEmployee(id){
        console.log(id);
        deleteEmployee(id).then((response)=>{
            getAllEmployees();
        }).catch((error)=>{
            console.error(error);
        })
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center font-weight-bold">List of Employee</h1>
            <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    employees.map((employee) =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstname}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.email}</td>
                            <td>
                            <button className='btn btn-info' onClick={ () => updateEmployee(employee.id)}>Update</button>
                            <button className='btn btn-danger ms-3' onClick={()=>removeEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>)
                }
                </tbody>
            </table>
        </div>
    )
}
export default ListEmployeeComponent