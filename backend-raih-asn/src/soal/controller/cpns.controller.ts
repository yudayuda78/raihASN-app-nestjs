import { Controller, Get, Post, Body } from '@nestjs/common';
import { SoalService } from '../soal.service';
import { CreateSoalDto } from '../dto/create-soal.dto';

@Controller('soal/cpns')
export class CpnsController {
  constructor(private readonly soalService: SoalService) {}

  @Get()
  findAll() {
    const data = this.soalService.findAll();
    return {
      statusCode: 200,
      message: 'Success',
      data: data,
    };
  }

  @Post()
  create(@Body() createSoalDto: CreateSoalDto) {
    const data = this.soalService.create(createSoalDto);
    return {
      statusCode: 201,
      message: 'Soal created successfully',
      data: data,
    };
  }

  @Get(':id')
  findOne(@Body('id') id: number) {
    const data = this.soalService.findOne(id);
    return {
      statusCode: 200,
      message: 'Success',
      data: data,
    };
  }
}
