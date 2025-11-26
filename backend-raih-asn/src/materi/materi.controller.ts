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
import { NotFoundException } from '@nestjs/common';

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

  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    const data = await this.materiService.findOne(slug);

    if (!data) {
      throw new NotFoundException(`Materi with slug ${slug} not found`);
    }

    return {
      status: 'success',
      message: `Materi with slug ${slug} retrieved successfully`,
      data,
    };
  }

  @Patch(':slug')
  update(
    @Param('slug') slug: string,
    @Body() updateMateriDto: UpdateMateriDto,
  ) {
    return this.materiService.update(slug, updateMateriDto);
  }

  @Delete(':slug')
  remove(@Param('slug') slug: string) {
    return this.materiService.remove(slug);
  }
}
