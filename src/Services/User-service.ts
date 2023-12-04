import * as UserRepo from '../Repository/User-repository';
import { User } from '../Models/User';
export const postUser = async (user:User) => {
    
    try {
        const result = await UserRepo.postUser(user);
        return result;
    } catch (error) {
        throw error;
    }

}


export const getUser = async () => {
    try {
        const user = await UserRepo.getUsers();
        console.log("QUERY ON USER SERVICE", user)
        return user;
    } catch (error) {
        throw error;
    }
}