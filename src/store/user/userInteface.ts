export interface IUserCreate{
    name: string,
    email: string,
    phone_number?: string,
    is_activated?: boolean,
    password: string,
    activation_link?: string
}

export interface IUserLogin{
    email: string,
    password: string
}

export interface IUser{
    name: string,
    id: string,
    email: string,
    phone: string,
    photo: string
}

export interface IAds{
    id: string,
    title: string,
    description: string,
    price: number,
    photo: string[],
    city: string,
    up: boolean,
    category_id: string
}

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}


