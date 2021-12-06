import { AddShopDto } from '../dtos/add-shop.dto';
import { RemoveShopDto } from '../dtos/remove-shop.dto';

export abstract class IShopsService {
    abstract getShops(): Promise<any>

    abstract addShop(addShopDto: AddShopDto): Promise<any>

    abstract removeShop(removeShopDto: RemoveShopDto): Promise<any>
}