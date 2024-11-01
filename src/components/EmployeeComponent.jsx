import React, {useState} from 'react'
import {createEmployee} from "../services/EmployeeService.jsx";
import {useNavigate} from "react-router-dom";

const EmployeeComponent = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')

    const [error, setError] = useState({
        firstname: '',
        lastname: '',
        email: ''
    })

    const navigator = useNavigate();

    function saveEmployee(e){
        e.preventDefault();

        if(validateForm()){
            const employee = { firstname, lastname, email };
            console.log(employee);

            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigator('/employee');
            })
        }
    }
    function validateForm(){
        let valid = true;
        const  errorsCopy ={...error}
        if (firstname.trim()){
            errorsCopy.firstname='';
        }else{
            errorsCopy.firstname='First name is reqired';
            valid=false;
        }
        if(lastname.trim()){
            errorsCopy.lastname='';
        }else{
            errorsCopy.lastname='Email is reqired';
            valid=false;
        }
        if(email.trim()){
            errorsCopy.email='';
        }else{
            errorsCopy.email='Email is reqired';
            valid=false;
        }
        setError(errorsCopy);
        return valid;
    }

    return (
        <div className='container'>
            <br/>
            <br/>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center' >Add Employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Employee Firstname: </label>
                                <input
                                    type='text'
                                    placeholder='Enter First Name: '
                                    name='firstname'
                                    value={firstname}
                                    className={`form-control ${error.firstname ? 'is-invalid':''}`}
                                    onChange={(e) =>setFirstname(e.target.value)}
                                ></input>
                                {error.firstname && <div className='invalid-feedback'>{error.firstname}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Employee lastname: </label>
                                <input
                                    type='text'
                                    placeholder='Enter Last Name: '
                                    name='firstname'
                                    value={lastname}
                                    className={`form-control ${error.lastname ? 'is-invalid':''}`}
                                    onChange={(e) =>setLastname(e.target.value)}
                                ></input>
                                {error.lastname && <div className='invalid-feedback'>{error.lastname}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email: </label>
                                <input
                                    type='text'
                                    placeholder='Enter Email: '
                                    name='email'
                                    value={email}
                                    className={`form-control ${error.email ? 'is-invalid':''}`}
                                    onChange={(e) =>setEmail(e.target.value)}
                                ></input>
                                {error.email && <div className='invalid-feedback'>{error.email}</div>}
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