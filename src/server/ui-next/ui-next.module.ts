import { Module } from '@nestjs/common';
import { UiRenderService } from './services/ui-render.service';
import { UiControllerController } from './controllers/ui-controller.controller';

@Module({
  providers: [UiRenderService],
  controllers: [UiControllerController],
})
export class UiNextModule {}
