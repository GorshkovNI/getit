// /src/api/usersApi.ts
import axios from 'axios';
import $api from "../http";
import {IUserCreate, IUserLogin} from "@store/user/userInteface";

export default class UserApi{
    static async createUser(data:IUserCreate){
        return $api.post('createUser', data)
    }

    static async login(data:IUserLogin){
        return $api.post('login', data)
    }

    static async logout(){
        return $api.get('logout')
    }

}
// export const fetchUsersFromApi = async () => {
//     const response = await axios.get('https://example.com/api/users');
//     return response.data;
// };