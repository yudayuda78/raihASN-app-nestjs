import { Injectable } from '@nestjs/common';
import { CreateSoalDto } from './dto/create-soal.dto';
import { UpdateSoalDto } from './dto/update-soal.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SoalService {
  constructor(private prisma: PrismaService) {}

  create(createSoalDto: CreateSoalDto) {
    try {
      return this.prisma.soalCpns.create({
        data: {
          soal: createSoalDto.soal,
          tryoutCpnsId: createSoalDto.tryoutCpnsId,
          jenisMateri: createSoalDto.jenisMateri,
          optionA: createSoalDto.optionA,
          optionB: createSoalDto.optionB,
          optionC: createSoalDto.optionC,
          optionD: createSoalDto.optionD,
          optionE: createSoalDto.optionE,
          correctOption: createSoalDto.correctOption,
          optionAImage: createSoalDto.optionAImage,
          optionBImage: createSoalDto.optionBImage,
          optionCImage: createSoalDto.optionCImage,
          optionDImage: createSoalDto.optionDImage,
          optionEImage: createSoalDto.optionEImage,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.soalCpns.findMany();
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    try {
      return this.prisma.soalCpns.findUnique({
        where: { id: id },
      });
    } catch (error) {
      throw error;
    }
  }

  update(id: number, updateSoalDto: UpdateSoalDto) {
    try {
      return this.prisma.soalCpns.update({
        where: { id: id },
        data: {
          soal: updateSoalDto.soal,
          tryoutCpnsId: updateSoalDto.tryoutCpnsId,
          jenisMateri: updateSoalDto.jenisMateri,
          optionA: updateSoalDto.optionA,
          optionB: updateSoalDto.optionB,
          optionC: updateSoalDto.optionC,
          optionD: updateSoalDto.optionD,
          optionE: updateSoalDto.optionE,
          correctOption: updateSoalDto.correctOption,
          optionAImage: updateSoalDto.optionAImage,
          optionBImage: updateSoalDto.optionBImage,
          optionCImage: updateSoalDto.optionCImage,
          optionDImage: updateSoalDto.optionDImage,
          optionEImage: updateSoalDto.optionEImage,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  remove(id: number) {
    try {
      return this.prisma.soalCpns.delete({
        where: { id: id },
      });
    } catch (error) {
      throw error;
    }
  }
}
