import { Module } from '@nestjs/common';
import { TryoutService } from './tryout.service';
import { CpnsController } from './controllers/cpns.controller';
import { PppkController } from './controllers/pppk.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [TryoutService, PrismaService],
  controllers: [CpnsController, PppkController],
})
export class TryoutModule {}
