export type coordinates = {
    longitude: number
    latitude: number
}

export interface IShop {
    title: string
    address: {
        city: string
        full: string
    }
    phone: string
    email: string
    coordinates: coordinates
}