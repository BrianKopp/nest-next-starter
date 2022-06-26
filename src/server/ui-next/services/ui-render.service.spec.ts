import { Test, TestingModule } from '@nestjs/testing';
import { UiRenderService } from './ui-render.service';

describe('UiRenderService', () => {
  let service: UiRenderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UiRenderService],
    }).compile();

    service = module.get<UiRenderService>(UiRenderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
