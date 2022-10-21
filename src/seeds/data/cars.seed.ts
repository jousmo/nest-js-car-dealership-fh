import { v4 as uuid } from 'uuid';
import { Car } from '../../cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    uuid: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    uuid: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    uuid: uuid(),
    brand: 'Jeep',
    model: 'Cherokee',
  },
];
