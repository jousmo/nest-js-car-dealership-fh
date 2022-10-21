import { Module } from '@nestjs/common';
import { SeedsService } from './seeds.service';
import { SeedsController } from './seeds.controller';
import { CarsModule } from '../cars/cars.module';
import { BrandsModule } from '../brands/brands.module';

@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [SeedsController],
  providers: [SeedsService],
})
export class SeedsModule {}
