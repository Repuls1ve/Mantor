import { coordinates } from 'src/shops/interfaces/shop.interface';

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