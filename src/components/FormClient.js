import React from 'react';
class FormClient extends React.Component {
	render() {
		return (
			<div>

				<div className="modal-body">
					<form>
						<div className="form-group">
							<input type="text" className="form-control" id="recipient-name" placeholder="Razão social" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" id="recipient-name" placeholder="CPF/CNPJ" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" id="recipient-name" placeholder="Digite o e-mail" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" id="recipient-name" placeholder="Endereço" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" id="recipient-name" placeholder="Telefone" />
						</div>

						<div className="form-group">
							<p>+ Atribuir projetos a esse cliente</p>
						</div>
						<div className="form-group">
							<button type="button" className="btn btn-primary btn-lg btn-block" data-dismiss="modal">Cadastrar
                  Cliente</button>
						</div>
					</form>
				</div>

			</div>


		);
	}
}
export default FormClient;