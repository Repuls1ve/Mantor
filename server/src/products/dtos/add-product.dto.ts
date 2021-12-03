import { IProduct } from '../interfaces/product.interface';

export class AddProductDto implements IProduct {
    title: IProduct['title']
    vendor: IProduct['vendor']
    applying: IProduct['applying']
    code: IProduct['code']
}