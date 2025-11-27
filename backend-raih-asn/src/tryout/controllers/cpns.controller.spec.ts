import { Test, TestingModule } from '@nestjs/testing';
import { CpnsController } from './cpns.controller';

describe('CpnsController', () => {
  let controller: CpnsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CpnsController],
    }).compile();

    controller = module.get<CpnsController>(CpnsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
