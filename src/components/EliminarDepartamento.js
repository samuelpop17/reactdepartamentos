import React, { Component } from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import axios from 'axios'
import Global from '../Global'
export default class EliminarDepartamento extends Component {
  
    state={
        status:false
    }

    deletedepartamento=()=>{
        var url=Global.apiDepar+"/api/departamentos/"+this.props.iddepartamento
    
        axios.delete(url).then(response=>{
            this.setState({
                status:true
            })
        })
    }
  
    render() {
    return (
      <div>
        {
            this.state.status==true &&
            (<Navigate to="/"/>)
        }
        <h1>EliminarDepartamento</h1>
        <h1>¿Quieres eliminar este departamento, con id:  {this.props.iddepartamento} ?</h1>
        <button className="btn btn-danger"onClick={()=>this.deletedepartamento()}>Eliminar</button>
        <NavLink to={"/"} className="btn btn-success">Volver</NavLink>
      </div>
    )
  }
}
