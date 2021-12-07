import { ShopDocument } from 'src/schemas/shop.schema';
import { AddShopDto } from '../dtos/add-shop.dto';
import { RemoveShopDto } from '../dtos/remove-shop.dto';

export abstract class IShopsService {
    abstract getShops(): Promise<ShopDocument[]>

    abstract addShop(addShopDto: AddShopDto): Promise<ShopDocument>

    abstract removeShop(removeShopDto: RemoveShopDto): Promise<ShopDocument>
}