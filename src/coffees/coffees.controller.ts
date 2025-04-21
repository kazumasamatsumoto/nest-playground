import { CoffeesService } from './coffees.service';
import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  // クエリパラメータを付与したURLを受け取れるように@Queryデコレータが存在する
  @Get()
  findAll(@Query() paginationQuery) {
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() body) {
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
