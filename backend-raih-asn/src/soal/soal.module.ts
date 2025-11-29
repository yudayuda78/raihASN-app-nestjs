import { Module } from '@nestjs/common';
import { SoalService } from './soal.service';
import { PrismaService } from '../prisma.service';
import { CpnsController } from './controller/cpns.controller';
import { PppkController } from './controller/pppk.controller';

@Module({
  controllers: [SoalController, CpnsController, PppkController],
  providers: [SoalService, PrismaService],
})
export class SoalModule {}
