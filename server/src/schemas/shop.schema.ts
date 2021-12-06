import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IShop } from 'src/shops/interfaces/shop.interface';

export type ShopDocument = IShop & Document

@Schema()
export class Shop implements IShop {
    @Prop({
        type: String,
        required: true
    })
    title: IShop['title']

    @Prop({
        type: Object,
        required: true
    })
    address: IShop['address']

    @Prop({
        type: String,
        required: true
    })
    phone: IShop['phone']

    @Prop({
        type: String,
        required: true
    })
    email: IShop['email']

    @Prop({
        type: Object,
        required: true
    })
    coordinates: IShop['coordinates']
}

export const ShopSchema = SchemaFactory.createForClass(Shop)