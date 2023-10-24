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
              <th></th>
              
            </tr>
          </thead>
          <tbody>
            {this.state.departamentos.map((departamento,index) => (
              <tr key={index}>

                <td>{departamento.localidad}</td>
                <td>{departamento.nombre}</td>
                <td>{<NavLink to={"/detalledepartamento/"+departamento.numero+"/"+departamento.nombre+"/"+departamento.localidad}>Detalles</NavLink>}</td>
                
                
                </tr>
            ))}
          </tbody>
        </table>


      </div>
    )
  }
}
