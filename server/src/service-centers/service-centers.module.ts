import { Module } from '@nestjs/common';
import { CentersService } from './service-centers.service';
import { CentersController } from './service-centers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceCenter, ServiceCenterSchema } from 'src/schemas/service-center.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: ServiceCenter.name, schema: ServiceCenterSchema}])],
  providers: [CentersService],
  controllers: [CentersController]
})
export class ServiceCentersModule {}
