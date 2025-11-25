import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MateriService } from './materi.service';
import { CreateMateriDto } from './dto/create-materi.dto';
import { UpdateMateriDto } from './dto/update-materi.dto';

@Controller('materi')
export class MateriController {
  constructor(private readonly materiService: MateriService) {}

  @Post()
  create(@Body() createMateriDto: CreateMateriDto) {
    return this.materiService.create(createMateriDto);
  }

  @Get()
  async findAll() {
    const data = await this.materiService.findAll();

    return {
      status: 'success',
      message: 'List materi retrieved successfully',
      data,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMateriDto: UpdateMateriDto) {
    return this.materiService.update(+id, updateMateriDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materiService.remove(+id);
  }
}
