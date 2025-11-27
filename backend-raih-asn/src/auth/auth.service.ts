import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async authenticate(input: { email: string; password: string }) {
    const user = await this.validateUser(input.email, input.password);
    if (!user) {
      throw new UnauthorizedException('Email atau password salah');
    }
    return this.signIn(user);
  }

  async validateUser(email: string, pass: string) {
    const user = await this.usersService.findUserByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      return {
        id: user.id,
        email: user.email,
      };
    }
    return null;
  }

  async signIn(user: { id: number; email: string }) {
    const payload = { email: user.email, userId: user.id };
    const accessToken = this.jwtService.sign(payload);
    return {
      access_token: accessToken,
      userId: user.id,
      email: user.email,
    };
  }

  async register(data: { name: string; email: string; password: string }) {
    const { name, email, password } = data;

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      throw new BadRequestException('Email sudah terdaftar');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    return {
      message: 'Registrasi berhasil',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
}
