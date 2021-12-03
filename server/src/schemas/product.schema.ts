import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IProduct } from 'src/products/interfaces/product.interface';

export type ProductDocument = Product & Document;

@Schema()
export class Product implements IProduct {
    @Prop({
        type: String,
        required: true
    })
    title: IProduct['title']

    @Prop({
        type: Object,
        required: true
    })
    vendor: IProduct['vendor']
    
    @Prop({
        type: String,
        required: true
    })
    applying: IProduct['applying']

    @Prop({
        type: String,
        unique: true,
        required: true
    })
    code: IProduct['code']
}

export const ProductSchema = SchemaFactory.createForClass(Product);