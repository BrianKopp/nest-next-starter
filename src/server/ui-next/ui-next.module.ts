import { DynamicModule, Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { UiNextController } from './ui-next.controller';

// eslint-disable-next-line @next/next/no-assign-module-variable
declare const module: any;

@Module({})
export class UiNextModule {
  public static initialize(): DynamicModule {
    const renderModule =
      module.hot?.data?.renderModule ??
      RenderModule.forRootAsync(
        Next({ dev: process.env.NODE_ENV !== 'production' }),
        { viewsDir: null },
      );
    if (module.hot) {
      module.hot.dispose((data: any) => {
        data.renderModule = renderModule;
      });

      return {
        module: UiNextModule,
        imports: [renderModule],
        controllers: [UiNextController],
        providers: [],
      };
    }
  }
}
