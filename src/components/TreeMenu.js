import React from 'react';
import einsteinImg from '../assets/einstein.png';
class TreeMenu extends React.Component {
	render() {
		return (

			<div className="col" >
				<div id="jstree">
					<img className="format-logo img-format" src={einsteinImg} alt="Foto usuário" /> Dashboard Admin
        <ul>
						<li>Dashboard</li>
						<li>Cadastros
            <ul>
								<li id="child_node_1">Usuários</li>
								<li>Clientes</li>
							</ul>
						</li>
						<li>Projetos
            <ul>
								<li id="child_node_1">Criar prjeto</li>
								<li>Relatorio</li>
								<li>Registros</li>
							</ul>
						</li>
						<li>Meu perfil
            <ul>
								<li id="child_node_1">Trocar senha</li>
								<li>Editar perfil</li>
							</ul>
						</li>
						<li>Ver registro de horas</li>
						<li>Configurações</li>
						<li>Sair do sistema</li>
					</ul>
				</div>
			</div>

		);
	}
}
export default TreeMenu;