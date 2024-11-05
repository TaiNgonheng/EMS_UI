import React, {useEffect, useState} from 'react'
import {deleteDepartment, getAllDepartments} from "../services/DepartmentService.jsx";
import {Link, useNavigate} from "react-router-dom";

const ListDepartmentComponent = () => {


    const [department, setDepartment] = useState([]);

    const navigator = useNavigate()
    useEffect(()=>{
        listDepartment();
    },[])

    function listDepartment(){
        getAllDepartments().then((response)=>{
            console.log(response.data);
            setDepartment(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function updateDepartment(id){
        navigator(`/edit-department/${id}`)
    }

    function removeDepartment(id){
        deleteDepartment(id).then((response)=>{
            console.log(response.data);
            listDepartment();
        }).catch(error => {
            console.error(error);
        })
    }
    return (
        <div className='container mt-3'>
            <h2 className='text-center fw-bold'>List of Departments</h2>
            <Link to='/add-department' className='btn btn-primary mb-2'>Add Department</Link>
            <table className='table table-striped table-bordered'>
                <thead >
                <tr >
                    <th className='text-center'>ID</th>
                    <th className='text-center'>Department</th>
                    <th>Description</th>
                    <th className='w-25 te'>Action</th>
                </tr>
                </thead>

                <tbody>
                    {department.map((department)=>
                         <tr key={department.id}>
                             <td>{department.id}</td>
                             <td>{department.departmentName}</td>
                             <td>{department.departmentDescription}</td>
                             <td>
                                 <button onClick={() => updateDepartment(department.id)}
                                         className='btn btn-info'>Update
                                 </button>
                                 <button onClick={() => removeDepartment(department.id)}
                                         className='btn btn-danger ms-3'>Delete
                                 </button>
                             </td>
                         </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
};
export default ListDepartmentComponent
