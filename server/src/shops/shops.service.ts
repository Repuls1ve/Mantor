import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Shop, ShopDocument } from 'src/schemas/shop.schema';
import { AddShopDto } from './dtos/add-shop.dto';
import { RemoveShopDto } from './dtos/remove-shop.dto';
import { IShopsService } from './interfaces/shops-service.interface';

@Injectable()
export class ShopsService implements IShopsService {
    constructor(@InjectModel(Shop.name) private readonly shopModel: Model<ShopDocument>) {}

    async getShops(): Promise<ShopDocument[]> {
        return this.shopModel.find()
    }

    async addShop(addShopDto: AddShopDto): Promise<ShopDocument> {
        return this.shopModel.create(addShopDto)
    }

    async removeShop(removeShopDto: RemoveShopDto): Promise<ShopDocument> {
        return this.shopModel.findOneAndDelete({_id: removeShopDto._id})
    }
}
