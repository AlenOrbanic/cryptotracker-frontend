import Api from '@/services/Api'

export default{
    register(credentials){
        return Api().post('user', credentials)
    }
}

/*
AuthenticationService.register({
    email: 'alenorbanic@gmail.com',
    password: '123456'
})

*/