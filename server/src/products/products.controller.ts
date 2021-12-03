import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ProductDocument } from 'src/schemas/product.schema';
import { AddProductDto } from './dtos/add-product.dto';
import { RemoveProductDto } from './dtos/remove-product.dto';
import { IProductsController } from './interfaces/products-controller.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController implements IProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    async getProducts(): Promise<ProductDocument[]> {
        return await this.productsService.getProducts()
    }

    @Post('add')
    async addProduct(@Body() addProductDto: AddProductDto): Promise<ProductDocument> {
        return await this.productsService.addProduct(addProductDto)
    }

    @Delete('remove')
    async removeProduct(@Body() removeProductDto: RemoveProductDto): Promise<ProductDocument> {
        return await this.productsService.removeProduct(removeProductDto)
    }
}
