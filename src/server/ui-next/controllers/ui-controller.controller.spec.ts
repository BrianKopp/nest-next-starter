import { Test, TestingModule } from '@nestjs/testing';
import { UiControllerController } from './ui-controller.controller';

describe('UiControllerController', () => {
  let controller: UiControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UiControllerController],
    }).compile();

    controller = module.get<UiControllerController>(UiControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
