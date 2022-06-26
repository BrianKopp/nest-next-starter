import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { UiControllerController } from './ui-controller.controller';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({ dev: process.env.NODE_ENV !== 'production' }),
      { viewsDir: null },
    ),
  ],
  providers: [],
  controllers: [UiControllerController],
})
export class UiNextModule {}
