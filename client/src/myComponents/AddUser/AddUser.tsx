import React from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

interface AddUserProps {}

interface AddUserState {
	email: string;
	pass: string;
	pass2: string;
	nombre: string;
	emailDisp: boolean;
}

class AddUser extends React.Component<AddUserProps, AddUserState> {
	constructor(props: AddUserProps) {
		super(props);

		this.handleChangeE = this.handleChangeE.bind(this);
		this.handleBlurE = this.handleBlurE.bind(this);
		this.handleChangeP = this.handleChangeP.bind(this);
		this.handleBlurP = this.handleBlurP.bind(this);
		this.handleChangeP2 = this.handleChangeP2.bind(this);
		this.handleBlurP2 = this.handleBlurP2.bind(this);
		this.handleChangeN = this.handleChangeN.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			email: "",
			pass: "",
			pass2: "",
			nombre: "",
			emailDisp: null,
		};
	}

	private handleChangeE(event) {
		this.setState({ email: event.target.value });
	}

	private handleBlurE(event) {
		let params = {
			email: this.state.email,
		};
		axios
			.post("/users/checkEmail/", params)
			.then((response) => {
				if (response.data === "Usuario Disponible") {
					//alert("Email Diponible");
					this.setState({ emailDisp: true });
				} else {
					//alert("Email Tomado")
					this.setState({ emailDisp: false });
				}
			})
			.catch((err) => {
				console.log(err); //codigo de que hacer en caso de error.
			});
		event.preventDefault();
	}

	private handleChangeP(event) {
		this.setState({ pass: event.target.value });
	}

	private handleBlurP(event) {
		//if(this.state.pass === "")
		//alert("Pass vacía")
	}

	private handleChangeP2(event) {
		this.setState({ pass2: event.target.value });
	}

	private handleBlurP2(event) {
		console.log(this.state.pass + " ## " + this.state.pass2);
		if (this.state.pass !== this.state.pass2) {
			//alert("Las contraseñas son diferentes, capo")
		}
	}

	private handleChangeN(event) {
		this.setState({ nombre: event.target.value });
	}

	private handleSubmit(event) {
		this.handleBlurE(event);
		if (this.state.pass === this.state.pass2 && this.state.emailDisp) {
			let params = {
				email: this.state.email,
				pass: this.state.pass,
				nombre: this.state.nombre,
			};
			axios
				.post("/users/addUser/", params) //url + parametros
				.then((response) => {
					if (response.data === "Nuevo Usuario Correcto") {
						alert("Nuevo Usuario Correcto");
					} else {
						alert("Error al agregar usuario");
					}
				})
				.catch((err) => {
					console.log(err); //codigo de que hacer en caso de error.
				});
			event.preventDefault();
		} else {
			alert("algo salio mal");
		}
	}

	render() {
		return (
			<div className="addUserContainer">
				<Form>
					<Form.Group controlId="formEmail">
						<Form.Label>Correo Electrónico</Form.Label>
						<Form.Control
							type="email"
							placeholder="Ingrese correo aquí"
							value={this.state.email}
							onChange={this.handleChangeE}
							onBlur={this.handleBlurE}
						/>
					</Form.Group>
					<Form.Group controlId="formNombre">
						<Form.Label>Nombre</Form.Label>
						<Form.Control placeholder="Ingrese correo aquí" value={this.state.nombre} onChange={this.handleChangeN} />
					</Form.Group>

					<Form.Group controlId="formPassword">
						<Form.Label>Contraseña</Form.Label>
						<Form.Control
							type="password"
							placeholder="Contraseña"
							value={this.state.pass}
							onChange={this.handleChangeP}
							onBlur={this.handleBlurP}
						/>
					</Form.Group>

					<Form.Group controlId="formPassword2">
						<Form.Label>Repita Contraseña</Form.Label>
						<Form.Control
							type="password"
							placeholder="Repita Contraseña"
							value={this.state.pass2}
							onChange={this.handleChangeP2}
							onBlur={this.handleBlurP2}
						/>
					</Form.Group>

					<Form.Group controlId="formLogout">
						<Form.Check type="checkbox" label="No cerrar Sesión" />
					</Form.Group>
					<div className="buttonCenter">
						<Button variant="primary" type="submit" onClick={this.handleSubmit}>
							Crear Usuario
						</Button>
					</div>
				</Form>
			</div>
		);
	}
}
export default AddUser;
