import React from 'react';
import iconInfoImg from '../assets/icon-info.png';
import UserService from '../services/UserService';
import $ from 'jquery'

class FormUser extends React.Component {
	constructor(props) {
    super(props);
		this.state = {usertName: '', cpf: '', userEmail:'', permision:''};
		this.setUserName	= this.setUserName.bind(this);
		this.setCpf 			= this.setCpf.bind(this);
		this.setUserEmail = this.setUserEmail.bind(this);
		this.setPermision = this.setPermision.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.userService 	= new UserService();
	}
	handleSubmit(event) {
		event.preventDefault();
		this.userService.save(this.state);
		$('.modal').modal('hide')
	}
	setUserName(event) {
		this.setState({usertName: event.target.value});
	}
	setCpf(event) {
		this.setState({cpf: event.target.value});
	}
	setUserEmail(event) {
		this.setState({userEmail: event.target.value});
	}
	setPermision(event) {
		this.setState({permision: event.target.value});
  }
	render() {
		return (
			<div>
				<div className="modal-body">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<input type="text" className="form-control" value={this.state.usertName} onChange={this.setUserName} id="recipient-name" placeholder="Nome do usuário" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" value={this.state.setCpf} onChange={this.setCpf} id="recipient-name" placeholder="CPF" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" id="recipient-name" value={this.state.setUserEmailpf} onChange={this.setUserEmail}
								placeholder="Digite o e-mail (Será o login de acesso)" />
						</div>

						<div className="form-group">
							<ol className="breadcrumb format-line-modal">
								<li className="breadcrumb-item active" id="format-txt-line-modal">Permissão</li>
								<li> <img className="format-icon" src={iconInfoImg} alt="Icone information" /></li>
								<li>
									<div className="form-check col-3">
										<input className="form-check-input" type="radio" name="exampleRadios" id="radioAdm" value="Administrador" checked={this.state.permision === "Administrador"} onChange={this.setPermision}/>
										<label className="form-check-label" htmlFor="radioAdm" >Administrador</label>
									</div>
								</li>
								<li>
									<div className="form-check col-3">
										<input className="form-check-input" type="radio" name="exampleRadios" id="radioUsu" value="Usuário" checked={this.state.permision === "Usuário"} onChange={this.setPermision} />
										<label className="form-check-label" htmlFor="radioUsu" >Usuário</label>
									</div>
								</li>
							</ol>
						</div>

						<div className="form-group">
							<p>+ Atribuir projetos a esse usuário</p>
						</div>

						
							<button type="submit" className="btn btn-primary btn-lg btn-block" >Cadastrar
                  Usuário</button>
						
					</form>
				</div>
			</div >
		);
	}
}
export default FormUser;