import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { TryoutService } from '../tryout.service';
import { CreateTryoutDto } from '../dto/create-tryout.dto';

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

  @Post()
  async createCpns(@Body() createTryoutDto: CreateTryoutDto) {
    const tryoutCpns =
      await this.tryoutService.createTryooutCpns(createTryoutDto);
    return {
      message: 'Success create tryout cpns',
      data: tryoutCpns,
    };
  }

  @Get(':slug')
  async getCpnsBySlug() {
    const tryoutCpns = await this.tryoutService.getTryoutCpnsBySlug;
    return {
      message: 'Success fetch tryout cpns by slug',
      data: tryoutCpns,
    };
  }

  @Patch(':slug')
  async updateCpns() {
    const tryoutCpns = await this.tryoutService.updateTryoutCpns;
    return {
      message: 'Success update tryout cpns by slug',
      data: tryoutCpns,
    };
  }

  @Delete(':slug')
  async deleteCpns() {
    const tryoutCpns = await this.tryoutService.deleteTryoutCpns;
    return {
      message: 'Success delete tryout cpns by slug',
      data: tryoutCpns,
    };
  }
}
