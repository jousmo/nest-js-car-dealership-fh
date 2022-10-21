import { Brand } from '../../brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    uuid: uuid(),
    name: 'Toyota',
    createAt: new Date().getTime(),
  },
];
