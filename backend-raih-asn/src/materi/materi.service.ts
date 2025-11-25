import { Injectable } from '@nestjs/common';
import { CreateMateriDto } from './dto/create-materi.dto';
import { UpdateMateriDto } from './dto/update-materi.dto';
import { PrismaService } from '../prisma.service';
import { json } from 'stream/consumers';

@Injectable()
export class MateriService {
  constructor(private prisma: PrismaService) {}

  create(createMateriDto: CreateMateriDto) {
    return 'This action adds a new materi';
  }

  findAll() {
    return this.prisma.materi.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} materi`;
  }

  update(id: number, updateMateriDto: UpdateMateriDto) {
    return `This action updates a #${id} materi`;
  }

  remove(id: number) {
    return `This action removes a #${id} materi`;
  }
}
