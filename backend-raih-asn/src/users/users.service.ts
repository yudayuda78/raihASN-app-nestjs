import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

export type User = {
  id: number;
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findUserByEmail(email: string): Promise<User | undefined> {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      return undefined;
    }
    return {
      id: user.id,
      email: user.email,
      password: user.password,
    };
  }
}
