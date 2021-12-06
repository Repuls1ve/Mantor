import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ShopDocument } from 'src/schemas/shop.schema';
import { AddShopDto } from './dtos/add-shop.dto';
import { RemoveShopDto } from './dtos/remove-shop.dto';
import { IShopsController } from './interfaces/shops-controller.interface';
import { ShopsService } from './shops.service';

@Controller('shops')
export class ShopsController implements IShopsController {
    constructor(private readonly shopsService: ShopsService) {}

    @Get()
    async getShops(): Promise<ShopDocument[]> {
        return await this.shopsService.getShops()
    }

    @Post('add')
    async addShop(@Body() addShopDto: AddShopDto): Promise<ShopDocument> {
        return await this.shopsService.addShop(addShopDto)
    }

    @Delete('remove')
    async removeShop(@Body() removeShopDto: RemoveShopDto): Promise<ShopDocument> {
        return await this.shopsService.removeShop(removeShopDto)
    }
}
