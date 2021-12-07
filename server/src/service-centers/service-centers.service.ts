import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServiceCenter, ServiceCenterDocument } from 'src/schemas/service-center.schema';
import { AddCenterDto } from './dtos/add-center.dto';
import { RemoveCenterDto } from './dtos/remove-center.dto';
import { ICentersService } from './interfaces/centers-service.interface';

@Injectable()
export class CentersService implements ICentersService {
    constructor(@InjectModel(ServiceCenter.name) private readonly centerModel: Model<ServiceCenterDocument>) {}
    async getCenters(): Promise<ServiceCenterDocument[]> {
        return this.centerModel.find()
    }

    async addCenter(addCenterDto: AddCenterDto): Promise<ServiceCenterDocument> {
        return this.centerModel.create(addCenterDto)
    }

    async removeCenter(removeCenterDto: RemoveCenterDto): Promise<ServiceCenterDocument> {
        return this.centerModel.findOneAndDelete({_id: removeCenterDto._id})
    }
}
