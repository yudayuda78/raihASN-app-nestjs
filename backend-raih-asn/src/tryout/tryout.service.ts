import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

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

  getAllTryoutPppk() {
    return this.prisma.tryoutPppk.findMany({
      include: {
        soal: true,
      },
    });
  }

  getTryoutCpnsBySlug(slug: string) {
    return this.prisma.tryoutCpns.findUnique({
      where: {
        slug: slug,
      },
      include: {
        soal: true,
      },
    });
  }

  getTryoutPppkBySlug(slug: string) {
    return this.prisma.tryoutPppk.findUnique({
      where: {
        slug: slug,
      },
      include: {
        soal: true,
      },
    });
  }
}
