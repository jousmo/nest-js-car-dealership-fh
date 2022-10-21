import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

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

  createCar(createCarDto: CreateCarDto): Car {
    const newCar: Car = { ...createCarDto, uuid: uuid() };
    this.cars.push(newCar);
    return newCar;
  }

  updateCar(uuid: string, updateCarDto: UpdateCarDto): Car {
    const index = this.findIndex(uuid);
    const updatedCar: Car = { ...this.cars[index], ...updateCarDto };
    this.cars[index] = updatedCar;
    return updatedCar;
  }

  deleteCar(uuid: string): object {
    const index = this.findIndex(uuid);
    this.cars.splice(index, 1);
    return { uuid };
  }

  loadSeed(cars: Car[]) {
    this.cars = cars;
  }
}
