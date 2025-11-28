import { Module } from '@nestjs/common';
import { SoalService } from './soal.service';
import { SoalController } from './soal.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [SoalController],
  providers: [SoalService, PrismaService],
})
export class SoalModule {}
