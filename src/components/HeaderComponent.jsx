import React from 'react'

const HeaderComponent = () => {
    return (
        <div className="text-center">
            <header className="">
                <nav className="navbar navbar-light bg-light">
                    <form className="container-fluid justify-content-start">
                        <button className="btn btn-outline-success me-2" type="button">Employee Management</button>
                        <button className="btn btn-outline-secondary" type="button">Department Management</button>
                    </form>
                </nav>
            </header>
        </div>
    )
}
export default HeaderComponent
