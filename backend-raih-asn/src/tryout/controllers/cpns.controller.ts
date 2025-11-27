import { Controller, Get } from '@nestjs/common';
import { TryoutService } from '../tryout.service';

@Controller('tryout/cpns')
export class CpnsController {
  constructor(private tryoutService: TryoutService) {}

  @Get()
  async getCpns() {
    const tryoutCpns = await this.tryoutService.getAllTryoutCpns();
    return {
      message: 'Success fetch all tryout cpns',
      data: tryoutCpns,
    };
  }
}
