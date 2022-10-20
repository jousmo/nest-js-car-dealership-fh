import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Get()
  getAllBrands(): Brand[] {
    return this.brandsService.getAllBrands();
  }

  @Get(':uuid')
  getBrandByUUID(@Param('uuid', ParseUUIDPipe) uuid: string): Brand {
    return this.brandsService.getBrandByUUID(uuid);
  }

  @Post()
  create(@Body() createBrandDto: CreateBrandDto): Brand {
    return this.brandsService.create(createBrandDto);
  }

  @Patch(':uuid')
  update(
    @Param('uuid', ParseUUIDPipe) uuid: string,
    @Body() updateBrandDto: UpdateBrandDto,
  ): Brand {
    return this.brandsService.update(uuid, updateBrandDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid', ParseUUIDPipe) uuid: string): object {
    return this.brandsService.remove(uuid);
  }
}
