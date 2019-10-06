import React from 'react';
import ProjectService from '../services/ClientService';
import FormHours from './FormHours';

class ContentBox extends React.Component {
	constructor() {
		super();
		this.state = { projects: [] };
		this.projectService = new ProjectService();
	}
	componentDidMount() {
		let projects = this.projectService.findAll();
		this.setState({ projects: projects });
	}
	render() {
		return (

			<div className="col-10 content-wrapper" id="format-colum-2">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item" id="breadcrumb-format">Home</li>
						<li className="breadcrumb-item active" aria-current="page" id="breadcrumb-format">Dashboard</li>
					</ol>
				</nav>
				<p id="p-welcome">Olá <span className="font-name">José Severino</span>, bem vindo!</p>
				<p id="p-sub-welcome"> Veja o andamento dos projetos</p>
				<div className="card box-list-records" id="format-card-box">
					<form id="form-project">
						<div className="form-group">
							<label htmlFor="selectCompany" id="l-list-project">Listagem de projetos</label>
							<select className="form-control select-format" id="selectCompany">
								<option>Todos os registros no projeto</option>
								{
									this.state.projects.map(function (project) {
										return (
											<option key={project.clientName}>{project.clientName}</option>
										);
									}
									)
								}
							</select>
						</div>
					</form>
					<div className="card-body" id="list-project">
						<ul className="list-group list-group-flush">
							{
								this.state.projects.map(function (project) {
									return (
										<li className="list-group-item" key={project.clientName}>
											<div>
												<div className="format-p-line" >
													<p id="p-name-project">{project.clientName} > {project.area}</p>
													<p id="p-sistem-project">{project.projectName}</p>
													<p id="p-date-project">{project.andDate}</p>
												</div>
												<div className="format-nav-3 dropdown">
													<div className="dropdown">
														<div id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
															<nav className="navbar navbar-default">
																<div className="container-fluid">
																	<div className="navbar-header">
																		<div className="test"></div>
																	</div>
																</div>
															</nav>
														</div>
														<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
															<ul>
																<li className="nav-item">
																	<a className="nav-link" id="format-text-bar"  href="/"data-toggle="modal" data-target="#modalCadHours"
																		data-whatever="@getbootstrap">Inserir horas trabalhadas<span className="sr-only">(current)</span></a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div className="modal fade" id="modalCadHours" tabIndex="-1" role="dialog" aria-labelledby="modalCadHoursLabel"
													aria-hidden="true">
													<div className="modal-dialog" role="document">
														<div className="modal-content modal-format-hours">
															<div className="modal-header">
																<h5 className="modal-title" id="modalCadHoursLabel">Inserir horas trabalhadas</h5>
																<button type="button" className="close" data-dismiss="modal" aria-label="Close">
																	<span aria-hidden="true">&times;</span>
																</button>
															</div>
															<FormHours></FormHours>
														</div>
													</div>
												</div>
											</div>
										</li>
									)
								}
								)
							}
						</ul>
					</div>
				</div>
			</div>

		);
	}
}
export default ContentBox;