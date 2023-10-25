import React, { Component } from 'react'
import Global from '../Global'
import axios from "axios"
import { NavLink } from 'react-router-dom'
export default class HomeDepartamentos extends Component {
 
state={
    departamentos:[],
    status:false
}
    loadDepartamentos = () => {
        
        
        var url=Global.apiDepar+"api/departamentos"
        console.log(url)
        axios.get(url).then((response) => {
          this.setState({
            departamentos: response.data,
            status:true
          })
    
    
    
        })
      }

    componentDidMount = () => {
        this.loadDepartamentos();
      }
    
 
    render() {


        if(this.state.status==false){
            return(<div>
                <img src={Global.imagenLoading} style={{width:"250px"}}/>
            </div>)
        }



    return (
      <div>
        <h1>HomeDepartamentos</h1>

        <table className="table table-striped">
          <thead>
            <tr>

              <th>Localidad</th>
              <th>Nombre</th>
              <th>Informacion</th>
              <th>Borrar</th>
              <th>Modificacion</th>


              
            </tr>
          </thead>
          <tbody>
            {this.state.departamentos.map((departamento,index) => (
              <tr key={index}>

                <td>{departamento.localidad}</td>
                <td>{departamento.nombre}</td>
                <td>{<NavLink to={"/detalledepartamento/"+departamento.numero+"/"+departamento.nombre+"/"+departamento.localidad} className="btn btn-primary">Detalles</NavLink>}</td>
                <td>{<NavLink to={"/eliminardepartamento/"+departamento.numero} className="btn btn-danger">Eliminar</NavLink>}</td>
                <td>{<NavLink to={"/modificardepartamento/"+departamento.numero} className="btn btn-warning">Modificar</NavLink>}</td>

                
                </tr>
            ))}
          </tbody>
        </table>


      </div>
    )
  }
}
