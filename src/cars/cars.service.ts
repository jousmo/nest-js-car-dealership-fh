import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  private findIndex(id) {
    const index = this.cars.findIndex((car) => car.id === id);
    if (index < 0) {
      throw new NotFoundException('car not found');
    }
    return index;
  }

  getAllCars() {
    return this.cars;
  }

  getCarById(id: number) {
    const index = this.findIndex(id);
    return this.cars[index];
  }

  createCar(body: any) {
    this.cars.push(body);
    return body;
  }

  updateCar(id: number, body: any) {
    const index = this.findIndex(id);
    const updated = { ...this.cars[index], ...body };
    this.cars[index] = updated;
    return updated;
  }

  deleteCar(id: number) {
    const index = this.findIndex(id);
    this.cars.splice(index, 1);
    return { id };
  }
}
