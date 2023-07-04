export interface IUserCreate{
    name: string,
    email: string,
    phone_number?: string,
    is_activated?: boolean,
    password: string,
    activation_link?: string
}