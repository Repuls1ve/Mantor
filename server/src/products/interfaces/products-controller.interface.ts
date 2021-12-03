import { ProductDocument } from 'src/schemas/product.schema';
import { AddProductDto } from '../dtos/add-product.dto';
import { RemoveProductDto } from '../dtos/remove-product.dto';

export abstract class IProductsController {
    /**
     * Returns a list of products
     * @method GET
     * @access Public
     * @route products
     */
    abstract getProducts(): Promise<ProductDocument[]>

    /**
     * Adds a new product. Return created product
     * @method POST
     * @access Private 
     * @route products/add
     */
    abstract addProduct(addProductDto: AddProductDto): Promise<ProductDocument>

    /**
     * @method DELETE
     * @access Private
     * @route products/remove
     */
    abstract removeProduct(removeProductDto: RemoveProductDto): Promise<ProductDocument>
}