import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SOMETHING } from '../shared/something';

// eslint-disable-next-line @next/next/no-assign-module-variable
declare const module: any;

console.log(SOMETHING);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
