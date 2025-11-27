import { Test, TestingModule } from '@nestjs/testing';
import { PppkController } from './pppk.controller';

describe('PppkController', () => {
  let controller: PppkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PppkController],
    }).compile();

    controller = module.get<PppkController>(PppkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
