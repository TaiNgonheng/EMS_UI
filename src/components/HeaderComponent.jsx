import React from 'react'
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div className="text-center mt-1 ms-1 p-3">
            <header>
                <ul className="nav nav-pills nav-justified text-decoration-none ">
                    <li className="nav-item btn btn-outline-info">
                        <NavLink className='text-decoration-none' to='/employee'>
                            <a className="nav-link"><h3>Employee</h3></a>
                        </NavLink>
                    </li>
                    <li className="nav-item btn btn-outline-info">
                        <NavLink className='text-decoration-none' to='/department'>
                            <a className="nav-link"><h3>Department</h3></a>
                        </NavLink>
                    </li>
                    <li className="nav-item btn btn-outline-info">
                        <NavLink className='text-decoration-none'>
                            <a className="nav-link"><h3>Book</h3></a>
                        </NavLink>
                    </li>
                    <li className="nav-item btn btn-outline-info">
                        <NavLink className='text-decoration-none'>
                            <a className="nav-link"><h3>Room</h3></a>
                        </NavLink>
                    </li>
                </ul>
            </header>
        </div>
    )
}
export default HeaderComponent

