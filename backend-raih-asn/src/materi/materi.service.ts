import { Injectable } from '@nestjs/common';
import { CreateMateriDto } from './dto/create-materi.dto';
import { UpdateMateriDto } from './dto/update-materi.dto';
import { PrismaService } from '../prisma.service';
import { json } from 'stream/consumers';

@Injectable()
export class MateriService {
  constructor(private prisma: PrismaService) {}

  async create({ title, slug }: CreateMateriDto) {
    return this.prisma.materi.create({
      data: { title, slug },
    });
  }

  findAll() {
    return this.prisma.materi.findMany();
  }

  findOne(slug: string) {
    return this.prisma.materi.findUnique({
      where: { slug },
      include: {
        topikMaterial: true,
      },
    });
  }

  update(slug: string, { title, slug: newSlug }: UpdateMateriDto) {
    return this.prisma.materi.update({
      where: { slug },
      data: { title, slug: newSlug },
    });
  }

  remove(slug: string) {
    return this.prisma.materi.delete({
      where: { slug },
    });
  }
}
