import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTryoutDto } from './dto/create-tryout.dto';
import { UpdateTryoutDto } from './dto/update-tryout.dto';

@Injectable()
export class TryoutService {
  constructor(private prisma: PrismaService) {}

  async getAllTryoutCpns() {
    const tryoutCpns = await this.prisma.tryoutCpns.findMany({
      include: {
        soal: true,
      },
    });

    return tryoutCpns;
  }

  async createTryooutCpns({ tryoutName, slug }: CreateTryoutDto) {
    return this.prisma.tryoutCpns.create({
      data: { tryoutName, slug },
    });
  }

  async getTryoutCpnsBySlug(slug: string) {
    return this.prisma.tryoutCpns.findUnique({
      where: {
        slug: slug,
      },
      include: {
        soal: true,
      },
    });
  }

  async updateTryoutCpns(slug: string, dto: UpdateTryoutDto) {
    const { tryoutName, slug: newSlug } = dto;
    const data = await this.prisma.tryoutCpns.update({
      where: {
        slug: slug,
      },
      data: {
        tryoutName,
        slug: newSlug,
      },
    });

    return data;
  }

  async deleteTryoutCpns(slug: string) {
    return this.prisma.tryoutCpns.delete({
      where: { slug },
    });
  }

  async getAllTryoutPppk() {
    const tryoutPppk = await this.prisma.tryoutPppk.findMany({
      include: {
        soal: true,
      },
    });

    return tryoutPppk;
  }

  async createTryoutPppk({ tryoutName, slug }: CreateTryoutDto) {
    try {
      return this.prisma.tryoutPppk.create({
        data: { tryoutName, slug },
      });
    } catch (err) {
      throw err;
    }
  }

  async getTryoutPppkBySlug(slug: string) {
    return this.prisma.tryoutPppk.findUnique({
      where: {
        slug: slug,
      },
      include: {
        soal: true,
      },
    });
  }

  async updateTryoutPppk(slug: string, dto: UpdateTryoutDto) {
    try {
      return this.prisma.tryoutPppk.update({
        where: {
          slug: slug,
        },
        data: {
          tryoutName: dto.tryoutName,
          slug: dto.slug,
        },
      });
    } catch (err) {
      throw err;
    }
  }

  async deleteTryoutPppk(slug: string) {
    return this.prisma.tryoutPppk.delete({
      where: { slug },
    });
  }
}
