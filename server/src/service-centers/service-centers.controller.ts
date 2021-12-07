import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ServiceCenterDocument } from 'src/schemas/service-center.schema';
import { AddCenterDto } from './dtos/add-center.dto';
import { RemoveCenterDto } from './dtos/remove-center.dto';
import { ICentersController } from './interfaces/centers-controller.interface';
import { CentersService } from './service-centers.service';

@Controller('service-centers')
export class CentersController implements ICentersController {
    constructor(private readonly centersService: CentersService) {}

    @Get()
    async getCenters(): Promise<ServiceCenterDocument[]> {
        return await this.centersService.getCenters()
    }

    @Post('add')
    async addCenter(@Body() addCenterDto: AddCenterDto): Promise<ServiceCenterDocument> {
        return await this.centersService.addCenter(addCenterDto)
    }

    @Delete('remove')
    async removeCenter(@Body() removeCenterDto: RemoveCenterDto): Promise<ServiceCenterDocument> {
        return await this.centersService.removeCenter(removeCenterDto)
    }
}
