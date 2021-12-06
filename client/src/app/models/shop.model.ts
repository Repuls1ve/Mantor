export type coorditanes = {
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
    coordinates: coorditanes
}