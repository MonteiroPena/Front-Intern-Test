import React from 'react';
import logoGSW from '../assets/logo-gsw-en.svg';

class FormLogin extends React.Component {
	render() {
		return (

			<div>
				<form>
					<div className="form-group">
						<img className="format-logo" src={logoGSW} alt="Logo GSW" />
						<p>Acessar sua conta</p>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" id="recipient-name" placeholder="Digite seu login" />
					</div>
					<div className="form-group">
						<input type="password" className="form-control" id="recipient-name" placeholder="Digite sua senha" />
					</div>

					<div className="form-group">
						<div className='col-sm-3'>

							<li className="breadcrumb-item active" id="format-txt-line-modal">Adicionar usuários</li>
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="Manter conectado"></input>
							</div>

						</div>
						<div className='col-sm-3'>
							<p><a href="#">Esqueceu sua senha?</a></p>
						</div>
					</div>
					<div className="form-group">
						<button type="button" className="btn btn-primary btn-lg btn-block" data-dismiss="modal" onClick=''>Acessar conta</button>
					</div>
				</form>
			</div>

		);
	}
}
export default FormLogin;