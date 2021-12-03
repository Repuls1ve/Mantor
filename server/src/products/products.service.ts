import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/schemas/product.schema';
import { AddProductDto } from './dtos/add-product.dto';
import { RemoveProductDto } from './dtos/remove-product.dto';
import { IProductsService } from './interfaces/products-service.interface';

@Injectable()
export class ProductsService implements IProductsService {
    constructor(@InjectModel(Product.name) private readonly productModel: Model<ProductDocument>) {}
    async getProducts(): Promise<ProductDocument[]> {
        return this.productModel.find()
    }
    
    async addProduct(addProductDto: AddProductDto): Promise<ProductDocument> {
        return this.productModel.create(addProductDto)
    }

    async removeProduct(removeProductDto: RemoveProductDto): Promise<ProductDocument> {
        return this.productModel.findOneAndDelete({code: removeProductDto.code})
    }
}
