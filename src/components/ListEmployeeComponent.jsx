import React,{useEffect, useState} from 'react'
import {listEmployes} from "../services/EmployeeService.jsx";

const ListEmployeeComponent = () => {

    const [employees, setEmployee] = useState([])

    useEffect(()=>{
       listEmployes().then((response)=>{
           setEmployee(response.data);
       }).catch(error=>{
           console.error(error);
       })
    }, [])


    return (
        <div className="container">
            <h2 className="text-center">List of Employee</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
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
                        </tr>)
                     }
                    </tbody>
            </table>
        </div>
    )
}
export default ListEmployeeComponent
