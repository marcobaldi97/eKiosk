import React from 'react';
import axios from 'axios';
import {Button, Form} from 'react-bootstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        pass: ""
    }
    this.handleChangeE=this.handleChangeE.bind(this);
    this.handleChangeP=this.handleChangeP.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChangeE(event){
    this.setState({email:event.target.value});
  };
  handleChangeP(event){
    this.setState({pass:event.target.value});
  };
  handleSubmit(event){
    let params = {
        email: this.state.email,
        pass: this.state.pass,
      }; 
      axios
        .post('/users/login/', params)//url + parametros
        .then(response => {
          if(response.data==="Login Correcto"){
            alert("Login Correcto")
          }else{
            alert("Lacagastes")
          }
        })
        .catch(err => {
          console.log(err);//codigo de que hacer en caso de error.
        });
      event.preventDefault();
  }
  render(){
      return(
        <Form>
        <Form.Group controlId="formEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingrese correo aquí" value={this.state.email} onChange={this.handleChangeE}/>
        </Form.Group>
      
        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" value={this.state.pass} onChange={this.handleChangeP}/>
        </Form.Group>
        <Form.Group controlId="formLogout">
          <Form.Check type="checkbox" label="No cerrar Sesión" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
      )
  }

} export default Login
