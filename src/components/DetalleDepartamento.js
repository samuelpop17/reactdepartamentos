import React, { Component } from 'react'
import Global from '../Global'
import axios from "axios"
import { NavLink } from 'react-router-dom'

export default class DetalleDepartamento extends Component {
  

  
    render() {
    return (
      <div>
        <h1>DetalleDepartamento {this.props.iddepartamento}</h1>
        <NavLink to={"/"}>Volver</NavLink>

        <table className="table table-striped">
          <thead>
            <tr>
                <th>Numero</th> 
                <th>Nombre</th>
              <th>Localidad</th>
             
              
              
              <th></th>
              
            </tr>
          </thead>
          <tbody>
            
              <tr >

                <td>{this.props.iddepartamento}</td>
                <td>{this.props.nombre}</td>
                <td>{this.props.localidad}</td>
                
                
                
                </tr>
            
          </tbody>
        </table>
      </div>
    )
  }
}
