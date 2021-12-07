import { coordinates } from './shop.model';

export interface IServiceCenter {
    title: string
    address: {
        city: string
        full: string
    }
    phone: string
    email: string
    coordinates: coordinates
}