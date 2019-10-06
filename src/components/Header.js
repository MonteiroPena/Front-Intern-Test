import React from 'react';
import logoGSW from '../assets/logo-gsw-en.svg';
import FormProjet from './FormProjet';
import FormUser from './FormUser';
import FormClient from './FormClient';
class Header extends React.Component {
	render() {
		return (
			<div>

				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<img className="format-logo" src={logoGSW} alt="Logo GSW" />
					<div id="hamburguer-menu-wrapper">
						<button className="navbar-toggler hamburguer" type="button" data-toggle="collapse"
							data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
					</div>
					<form className="form-inline my-2 my-lg-0 search-form">
						<input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar" />
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
					</form>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="/" id="format-text-bar" data-toggle="modal" data-target="#mocalCriarProj"
									data-whatever="@getbootstrap">Criar projeto <span className="sr-only">(current)</span></a>
								<div className="modal fade" id="mocalCriarProj" tabIndex="-1" role="dialog" aria-labelledby="mocalCriarProj"
									aria-hidden="true">
									<div className="modal-dialog" role="document">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title" id="mocalCriarProj">Criar projeto</h5>
												<button type="button" className="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											<FormProjet></FormProjet>

										</div>
									</div>
								</div>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="/" id="format-text-bar" data-toggle="modal" data-target="#modalCadUsuario"
									data-whatever="@getbootstrap">Cadastrar usuario<span className="sr-only">(current)</span></a>
								<div className="modal fade" id="modalCadUsuario" tabIndex="-1" role="dialog" aria-labelledby="modalCadUsuario"
									aria-hidden="true">
									<div className="modal-dialog" role="document">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title" id="modalCadUsuario">Cadastrar usuário</h5>
												<button type="button" className="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											<FormUser></FormUser>
										</div>
									</div>
								</div>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="format-text-bar" href="/" data-toggle="modal" data-target="#modalCadCliente"
									data-whatever="@getbootstrap">Cadastrar cliente<span className="sr-only">(current)</span></a>
								<div className="modal fade" id="modalCadCliente" tabIndex="-1" role="dialog" aria-labelledby="modalCadCliente"
									aria-hidden="true">
									<div className="modal-dialog" role="document">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title" id="modalCadCliente">Cadastrar cliente</h5>
												<button type="button" className="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											<FormClient></FormClient>
										</div>
									</div>
								</div>
							</li>
							
						</ul>
					</div>
				</nav>

			</div>
		);
	}
}
export default Header;