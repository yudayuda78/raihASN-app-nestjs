import {
  Body,
  Controller,
  Post,
  Get,
  HttpCode,
  HttpStatus,
  NotImplementedException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { not } from 'rxjs/internal/util/not';
import { use } from 'passport';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.authenticate(body);
  }

  @Post('register')
  async register(
    @Body() body: { name: string; email: string; password: string },
  ) {
    return this.authService.register(body);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async me(@Request() request) {
    return request.user;
  }
}
