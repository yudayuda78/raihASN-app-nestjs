import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { MateriModule } from './materi/materi.module';
import { UsersModule } from './users/users.module';
import { TryoutModule } from './tryout/tryout.module';

@Module({
  imports: [AuthModule, MateriModule, UsersModule, TryoutModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
