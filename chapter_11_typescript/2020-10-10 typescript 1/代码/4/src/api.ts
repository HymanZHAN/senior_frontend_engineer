import axios from 'axios';
import {IUserLogin, IUserRegister, IResponseUser} from './api.interface';


export const getUser = async function(id: number) {
    return await axios.get<IResponseUser>('/user', {
        params: {
            id
        }
    });
}

export const getUsers = async function(order: 'desc' | 'asc') {
    return await axios.get<IResponseUser[]>('/users', {
        params: {
            order
        }
    });
}

export const register = async function(data: IUserRegister) {
    return await axios.post('/register', {
        data
    });
}

export const login = async function(data: IUserLogin) {
    return await axios.post('/login', {
        data
    });
}