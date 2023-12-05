import * as clientRepo from '../Repository/Client-repository';
import {Alert} from 'react-native';


export const postclient = async (client) => {
    
    try {
        const result = await clientRepo.postClient(client);
        return result;
    } catch (error) {
        throw error;
    }

}


export const getclients = async () => {
    try {
        const client = await clientRepo.getclients();
        console.log("QUERY ON client SERVICE", client)
        return client;
    } catch (error) {
        throw error;
    }
}

