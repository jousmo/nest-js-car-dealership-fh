import { Controller, Get } from '@nestjs/common';
import { SeedsService } from './seeds.service';

@Controller('seeds')
export class SeedsController {
  constructor(private readonly seedsService: SeedsService) {}

  @Get()
  loadSeeds() {
    return this.seedsService.loadSeeds();
  }
}
