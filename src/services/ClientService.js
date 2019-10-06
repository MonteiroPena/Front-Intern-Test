class ClientService
 {
	findAll(){
		return[
			{
				clientName:'Tanby Papelaria' ,
				area: 'estoque', 
				projectName: 'Gestão de estoque', 
				projectPrivate: 'sim',
				andDate: '05-05-2019'
			},
			{
				clientName:'Embraer' ,
				area: 'manutencao', 
				projectName: 'Gerenciamento da manutenção', 
				projectPrivate: 'sim',
				andDate: '10-10-2019'
			}, 
			{
				clientName:'Pretrobras' ,
				area: 'manutenção', 
				projectName: 'Gerenciamento da manutenção', 
				projectPrivate: 'sim',
				andDate: '06-06-2019'
			}
		]
		
	}
}
export default ClientService
;