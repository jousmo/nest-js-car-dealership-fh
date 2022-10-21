import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedsService {
  constructor(
    private readonly carsServices: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  loadSeeds() {
    this.carsServices.loadSeed(CARS_SEED);
    this.brandsService.loadSeed(BRANDS_SEED);
    return 'Execute Seeds Successfully';
  }
}
