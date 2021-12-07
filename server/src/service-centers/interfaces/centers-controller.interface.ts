import { ServiceCenterDocument } from 'src/schemas/service-center.schema';
import { AddCenterDto } from '../dtos/add-center.dto';
import { RemoveCenterDto } from '../dtos/remove-center.dto';

export abstract class ICentersController {
    /**
     * Returns a list of service centers
     * @method GET
     * @access Public
     * @route service-centers
     */
    abstract getCenters(): Promise<ServiceCenterDocument[]>

    /**
      * Adds a new service center. Returns created service center
      * @method POST
      * @access Private 
      * @route service-centers/add
      */
    abstract addCenter(addCenterDto: AddCenterDto): Promise<ServiceCenterDocument>

    /**
      * Deletes an existing service center. Return deleted service center
      * @method DELETE
      * @access Private
      * @route products/remove
      */
    abstract removeCenter(removeCenterDto: RemoveCenterDto): Promise<ServiceCenterDocument>
}