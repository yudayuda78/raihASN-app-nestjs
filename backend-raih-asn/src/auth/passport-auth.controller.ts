import {
  Controller,
  HttpCode,
  HttpStatus,
  NotImplementedException,
  Post,
  Get,
  Body,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportLocalGuard } from './guards/passport-local.guard';

@Controller('auth-v2')
export class PassportAuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @UseGuards(PassportLocalGuard)
  async login(@Body() body: { email: string; password: string }) {
    return 'success';
  }

  @Get('me')
  async me() {
    throw new NotImplementedException('Not implemented yet');
  }
}
