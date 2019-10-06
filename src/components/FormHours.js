import React from 'react';
class FormHours extends React.Component {
	render() {
		return (
			<div>

				<form>
					<div className="form-group">
						<p>Projeto selecionado</p>
					</div>
					<div className="form-group">
						<input id="date" type="date" />

					</div>
					<div className="form-group">
						<input type='text' className="form-control" id='datetimepicker4' placeholder="00:00" />
					</div>

					<div className="form-group">
						<button type="button" className="btn btn-primary btn-lg btn-block" data-dismiss="modal">Gravar a quantidade de horas</button>
					</div>
				</form>


			</div>

		);
	}
}
export default FormHours;