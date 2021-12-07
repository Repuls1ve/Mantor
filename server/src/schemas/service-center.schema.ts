import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IServiceCenter } from 'src/service-centers/interfaces/center.interface';

export type ServiceCenterDocument = IServiceCenter & Document

@Schema()
export class ServiceCenter implements IServiceCenter {
    @Prop({
        type: String,
        required: true
    })
    title: IServiceCenter['title']

    @Prop({
        type: Object,
        required: true
    })
    address: IServiceCenter['address']

    @Prop({
        type: String,
        required: true
    })
    phone: IServiceCenter['phone']

    @Prop({
        type: String,
        required: true
    })
    email: IServiceCenter['email']

    @Prop({
        type: Object,
        required: true
    })
    coordinates: IServiceCenter['coordinates']
}

export const ServiceCenterSchema = SchemaFactory.createForClass(ServiceCenter)