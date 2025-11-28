import { Injectable } from '@nestjs/common';
import { CreateSoalDto } from './dto/create-soal.dto';
import { UpdateSoalDto } from './dto/update-soal.dto';

@Injectable()
export class SoalService {
  create(createSoalDto: CreateSoalDto) {
    return 'This action adds a new soal';
  }

  findAll() {
    return `This action returns all soal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soal`;
  }

  update(id: number, updateSoalDto: UpdateSoalDto) {
    return `This action updates a #${id} soal`;
  }

  remove(id: number) {
    return `This action removes a #${id} soal`;
  }
}
