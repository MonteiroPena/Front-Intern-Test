import React from 'react';
import iconInfoImg from '../assets/icon-info.png';
import ClientService from '../services/ClientService';
import UserService from '../services/UserService';
import $ from 'jquery'

class FormProjet extends React.Component {
	constructor() {
		super();
		this.state = { clients: [], users: [], area: '', projectName: '', projectPrivate: '', andDate: '' };
		this.clientService = new ClientService();
		this.setClientName = this.setClientName.bind(this);
		this.setArea = this.setArea.bind(this);
		this.setProjectName = this.setProjectName.bind(this);
		this.setAndDate = this.setAndDate.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.projectPrivate = this.setProjectPrivate.bind(this);
		this.userService = new UserService();
		this.setUserName = this.setUserName.bind(this);
	}
	componentDidMount() {
		let clients = this.clientService.findAll();
		let users = this.userService.findAll();
		this.setState({ clients: clients });
		this.setState({ users: users })
	}
	handleSubmit(event) {
		event.preventDefault();
		this.clientService.save(this.state);
		$('.modal').modal('hide')
	}
	setUserName(event) {
		this.setState({ usertName: event.target.value });
	}
	setClientName(event) {
		this.setState({ clientName: event.target.value });
	}
	setArea(event) {
		this.setState({ area: event.target.value });
	}
	setProjectName(event) {
		this.setState({ projectName: event.target.value });
	}
	setProjectPrivate(event) {
		this.setState({ projectPrivate: event.target.value });
	}
	setAndDate(event) {
		this.setState({ andDate: event.target.value });
	}
	render() {
		return (

			<div className="modal-body">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input type="text" className="form-control" id="recipient-name" placeholder="Nome do projeto" />
					</div>
					<div className="form-group">
						<select className="form-control" id="exampleFormControlSelect1">
							<option >Selecione o cliente</option>
							{
								this.state.clients.map(function (client) {
									return (
										<option key={client.clientName}>{client.clientName}</option>
									);
								}
								)
							}
						</select>
					</div>

					<div className="form-group">
						<ol className="breadcrumb format-line-modal">
							<li className="breadcrumb-item active" id="format-txt-line-modal">Projeto privado</li>
							<li> <img className="format-icon" src={iconInfoImg} alt="Icone information" /></li>
							<li>
								<div className="form-check format-check">
									<input className="form-check-input" type="radio" name="exampleRadios" id="radioSim"
										value="Sim" checked={this.state.projectPrivate === "Sim"} onChange={this.setProjectPrivate} />
									<label className="form-check-label" htmlFor="radioSim">Sim</label>
								</div>
							</li>
							<li>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="exampleRadios" id="radioNao"
										value="nao" checked={this.state.projectPrivate === "nao"} onChange={this.setProjectPrivate} />
									<label className="form-check-label" htmlFor="radioNao">Não</label>
								</div>
							</li>
						</ol>
					</div>

					<div className="form-group">
						<input type='text' className="form-control" id='datetimepicker4' placeholder="Data" />
					</div>

					<div className="form-group">
						<li className="breadcrumb-item active" key={UserService.usertName} id="format-txt-line-modal">Adicionar usuários</li>
						<div className="form-check">

							{
								this.state.users.map(function (user) {
									return (
										<div key={user.usertName}>
											<label >
												<input className="form-check-input" type="checkbox" value={user.usertName}></input>{user.usertName}
											</label>
											<br />
										</div>
									)
								})
							}
						</div>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary btn-lg btn-block" data-dismiss="modal">Criar Projeto</button>
					</div>
				</form>
			</div>
		);
	}
}
export default FormProjet;