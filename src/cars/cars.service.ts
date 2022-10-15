import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
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

  private findIndex(uuid: string): number {
    const index = this.cars.findIndex((car) => car.uuid === uuid);
    if (index < 0) {
      throw new NotFoundException(`car ${uuid} not found`);
    }
    return index;
  }

  getAllCars(): Car[] {
    return this.cars;
  }

  getCarById(uuid: string): Car {
    const index = this.findIndex(uuid);
    return this.cars[index];
  }

  createCar(body: Car): Car {
    const newCar: Car = { ...body, uuid: uuid() };
    this.cars.push(newCar);
    return newCar;
  }

  updateCar(uuid: string, body: Car): Car {
    const index = this.findIndex(uuid);
    const updatedCar: Car = { ...this.cars[index], ...body };
    this.cars[index] = updatedCar;
    return updatedCar;
  }

  deleteCar(uuid: string): object {
    const index = this.findIndex(uuid);
    this.cars.splice(index, 1);
    return { uuid };
  }
}
