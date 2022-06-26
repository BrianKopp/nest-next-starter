import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SOMETHING } from '../shared/something';

console.log(SOMETHING);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
