import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './interfaces/car.interface';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars(): Car[] {
    return this.carsService.getAllCars();
  }

  @Get(':uuid')
  getCarById(@Param('uuid', ParseUUIDPipe) uuid: string): Car {
    return this.carsService.getCarById(uuid);
  }

  @Post()
  createCar(@Body() body: Car): Car {
    return this.carsService.createCar(body);
  }

  @Put(':uuid')
  updateCar(
    @Param('uuid', ParseUUIDPipe) uuid: string,
    @Body() body: Car,
  ): Car {
    return this.carsService.updateCar(uuid, body);
  }

  @Delete(':uuid')
  deleteCar(@Param('uuid', ParseUUIDPipe) uuid: string): object {
    return this.carsService.deleteCar(uuid);
  }
}
