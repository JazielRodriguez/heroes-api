import { Controller, Get } from '@nestjs/common';
import { Hero } from 'src/types/hero';
import { uuid } from 'uuidv4';
@Controller('heroes')
export class HeroesController {
  @Get('get-all')
  getHeroes(): Hero[] {
    return [
      {
        name: 'Superman',
        info: { superPowers: ['Super strength'] },
        enemies: [
          {
            name: 'Darkseid',
          },
          { name: 'Doomsday' },
        ],
        id: uuid(),
      },
      {
        name: 'Flash',
        info: { superPowers: ['Super speed'] },
        enemies: [
          {
            name: 'Captain Cold',
          },
          { name: 'The Mirror master' },
        ],
        id: uuid(),
      },
    ];
  }
}
