import React, { useEffect, useState } from 'react';
import { createDepartment, getDepartmentById, updateDepartment } from "../services/DepartmentService.jsx";
import { useNavigate, useParams } from "react-router-dom";

const DepartmentComponent = () => {
    const [departmentName, setDepartmentName] = useState('');
    const [departmentDescription, setDepartmentDescription] = useState('');
    const navigator = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getDepartmentById(id)
                .then((response) => {
                    setDepartmentName(response.data.departmentName);
                    setDepartmentDescription(response.data.departmentDescription);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [id]);

    function handleCreateDepartment() {
        const department = { departmentName, departmentDescription };
        createDepartment(department)
            .then((response) => {
                console.log(response.data);
                navigator('/department');
            })
            .catch(error => {
                console.error(error);
            });
    }

    function handleUpdateDepartment() {
        const department = { departmentName, departmentDescription };
        updateDepartment(id, department)
            .then((response) => {
                console.log(response.data);
                navigator('/department');
            })
            .catch(error => {
                console.error(error);
            });
    }

    function saveAndUpdateDepartment(e) {
        e.preventDefault();
        if (id) {
            handleUpdateDepartment();
        } else {
            handleCreateDepartment();
        }
    }

    function pageTitle() {
        return (
            <h2 className='text-center mt-lg-5'>
                {id ? "Update Department" : "Add Department"}
            </h2>
        );
    }

    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Department Name</label>
                                <input
                                    type='text'
                                    name='departmentName'
                                    placeholder='Enter Department Name'
                                    value={departmentName}
                                    onChange={(e) => setDepartmentName(e.target.value)}
                                    className='form-control'
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Department Description</label>
                                <input
                                    type='text'
                                    name='departmentDescription'
                                    placeholder='Enter Department Description'
                                    value={departmentDescription}
                                    onChange={(e) => setDepartmentDescription(e.target.value)}
                                    className='form-control'
                                />
                            </div>
                            <button onClick={saveAndUpdateDepartment} className='btn btn-success mb-2'>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentComponent;
