import { IServiceCenter } from '../interfaces/center.interface';

export class AddCenterDto implements IServiceCenter {
    title: IServiceCenter['title']
    address: IServiceCenter['address']
    phone: IServiceCenter['phone']
    email: IServiceCenter['email']
    coordinates: IServiceCenter['coordinates']
}