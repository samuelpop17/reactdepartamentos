import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class MenuDepartamentos extends Component {
  render() {
    return (
      <div>
        

        <div>
                
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">Departamentos</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    
                                    
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/create">Crear Departamento</NavLink>
                                </li>
                                
                                
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
      </div>
    )
  }
}
