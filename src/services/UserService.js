class UserService {
    save(user) {
    console.log('salvando usuario');
    console.log(user);
        
    }



    findAll() {
        return [
            {
                usertName: 'José',
                cpf: '111.111.111-11',
                userEmail: 'jose@jose.com',
                permision: 'Administrador'
            },
            {
                usertName: 'Ronaldo',
                cpf: '222.222.222-22',
                userEmail: 'ronaldo@ronaldo.com',
                permision: 'usuário'
            },
            {
                usertName: 'Flavio',
                cpf: '333.333.333-33',
                userEmail: 'flavio@flavio.com',
                permision: 'usuário'
            },
        ]

    }
}
export default UserService;