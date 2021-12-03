import { ProductDocument } from 'src/schemas/product.schema';
import { AddProductDto } from '../dtos/add-product.dto';
import { RemoveProductDto } from '../dtos/remove-product.dto';

/**
 * Todo: Describe methods 
 */
export abstract class IProductsService {
    abstract getProducts(): Promise<ProductDocument[]>

    abstract addProduct(addProductDto: AddProductDto): Promise<ProductDocument>

    abstract removeProduct(removeProductDto: RemoveProductDto): Promise<ProductDocument>
}