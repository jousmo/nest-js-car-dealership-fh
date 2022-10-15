import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.getAllCars();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.getCarById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return this.carsService.createCar(body);
  }

  @Put(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return this.carsService.updateCar(id, body);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.deleteCar(id);
  }
}
