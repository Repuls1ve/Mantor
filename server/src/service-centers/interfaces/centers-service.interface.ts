import { ServiceCenterDocument } from 'src/schemas/service-center.schema';
import { AddCenterDto } from '../dtos/add-center.dto';
import { RemoveCenterDto } from '../dtos/remove-center.dto';

export abstract class ICentersService {
    abstract getCenters(): Promise<ServiceCenterDocument[]>

    abstract addCenter(addCenterDto: AddCenterDto): Promise<ServiceCenterDocument>

    abstract removeCenter(removeCenterDto: RemoveCenterDto): Promise<ServiceCenterDocument>
}