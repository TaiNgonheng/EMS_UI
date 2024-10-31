import React, {useState} from 'react'
import {createEmployee} from "../services/EmployeeService.jsx";
import {useNavigate} from "react-router-dom";

const EmployeeComponent = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')

    const navigator = useNavigate();
    function saveEmployee(e){
        e.preventDefault();

        const employee = { firstname, lastname, email };
        console.log(employee);

        createEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/employee');
        })

    }


    return (
        <div className='container'>
            <br/>
            <br/>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Employee Firstname: </label>
                                <input
                                    type='text'
                                    placeholder='Enter First Name: '
                                    name='firstname'
                                    value={firstname}
                                    className='form-control'
                                    onChange={(e) =>setFirstname(e.target.value)}
                                ></input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Employee lastname: </label>
                                <input
                                    type='text'
                                    placeholder='Enter Last Name: '
                                    name='firstname'
                                    value={lastname}
                                    className='form-control'
                                    onChange={(e) =>setLastname(e.target.value)}
                                ></input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email: </label>
                                <input
                                    type='text'
                                    placeholder='Enter Email: '
                                    name='email'
                                    value={email}
                                    className='form-control'
                                    onChange={(e) =>setEmail(e.target.value)}
                                ></input>
                            </div>

                            <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default EmployeeComponent