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
  async update(
    @Param('slug') slug: string,
    @Body() updateMateriDto: UpdateMateriDto,
  ) {
    try {
      const data = await this.materiService.update(slug, updateMateriDto);
      if (!data) {
        throw new NotFoundException(`Materi with slug ${slug} not found`);
      }
      return {
        status: 'success',
        message: `Materi with slug ${slug} updated successfully`,
        data,
      };
    } catch (error) {
      throw new NotFoundException(`Materi with slug ${slug} not found`);
    }
  }

  @Delete(':slug')
  async remove(@Param('slug') slug: string) {
    try {
      const data = await this.materiService.remove(slug);
      if (!data) {
        throw new NotFoundException(`Materi with slug ${slug} not found`);
      }
      return {
        status: 'success',
        message: `Materi with slug ${slug} deleted successfully`,
        data,
      };
    } catch (error) {
      throw new NotFoundException(`Materi with slug ${slug} not found`);
    }
  }
}
