import { ShopDocument } from 'src/schemas/shop.schema';
import { AddShopDto } from '../dtos/add-shop.dto';
import { RemoveShopDto } from '../dtos/remove-shop.dto';

export abstract class IShopsController {
    /**
     * Returns a list of shops
     * @method GET
     * @access Public
     * @route shops
     */
    abstract getShops(): Promise<ShopDocument[]>

    /**
     * Adds a new shop. Returns created shop
     * @method POST
     * @access Private 
     * @route shops/add
     */
    abstract addShop(addShopDto: AddShopDto): Promise<ShopDocument>

    /**
     * Deletes an existing shop. Returns deleted shop
     * @method DELETE
     * @access Private
     * @route shops/remove
     */
    abstract removeShop(removeShopDto: RemoveShopDto): Promise<ShopDocument>
}