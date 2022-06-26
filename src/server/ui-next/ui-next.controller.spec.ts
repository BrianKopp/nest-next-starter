import { Test, TestingModule } from '@nestjs/testing';
import { UiNextController } from './ui-next.controller';

describe('UiNextController', () => {
  let controller: UiNextController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UiNextController],
    }).compile();

    controller = module.get<UiNextController>(UiNextController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
