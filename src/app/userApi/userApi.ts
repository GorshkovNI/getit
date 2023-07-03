// /src/api/usersApi.ts
import axios from 'axios';

export const fetchUsersFromApi = async () => {
    const response = await axios.get('https://example.com/api/users');
    return response.data;
};