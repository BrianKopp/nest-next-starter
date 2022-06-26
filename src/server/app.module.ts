import { Module } from '@nestjs/common';
import { UiNextModule } from './ui-next/ui-next.module';

@Module({
  imports: [UiNextModule.initialize()],
  controllers: [],
  providers: [],
})
export class AppModule {}
