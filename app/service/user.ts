import { Service } from 'egg';

interface UserLogin {
    name: string;
    password: string;
}

export default class User extends Service {
    public async login(user: UserLogin) {
        return user;
    }
};
