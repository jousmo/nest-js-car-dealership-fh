import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];

  private findIndex(uuid: string): number {
    const index = this.brands.findIndex((brand) => brand.uuid === uuid);
    if (index < 0) {
      throw new NotFoundException(`brand ${uuid} not found`);
    }
    return index;
  }

  getAllBrands() {
    return this.brands;
  }

  getBrandByUUID(uuid: string) {
    const index = this.findIndex(uuid);
    return this.brands[index];
  }

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      ...createBrandDto,
      uuid: uuid(),
      createAt: new Date().getTime(),
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(uuid: string, updateBrandDto: UpdateBrandDto) {
    const index = this.findIndex(uuid);
    const updatedBrand: Brand = {
      ...this.brands[index],
      ...updateBrandDto,
      updatedAt: new Date().getTime(),
    };
    this.brands[index] = updatedBrand;
    return updatedBrand;
  }

  remove(uuid: string): object {
    const index = this.findIndex(uuid);
    this.brands.splice(index, 1);
    return { uuid };
  }

  loadSeed(brands: Brand[]) {
    this.brands = brands;
  }
}
