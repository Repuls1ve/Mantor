import { IShop } from '../interfaces/shop.interface';

export class AddShopDto implements IShop {
    title: IShop['title']
    address: IShop['address']
    email: IShop['email']
    phone: IShop['phone']
    coordinates: IShop['coordinates']
}