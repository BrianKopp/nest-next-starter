import { Injectable, OnModuleInit } from '@nestjs/common';
import next, { NextServer } from 'next/dist/server/next';

@Injectable()
export class UiRenderService implements OnModuleInit {
  private server: NextServer;

  async onModuleInit(): Promise<void> {
    this.server = next({
      dev: process.env.NODE_ENV !== 'production',
      dir: './src',
      conf: {
        distdir: './.next',
      },
    });
    await this.server.prepare();
  }

  public getNextServer(): NextServer {
    return this.server;
  }
}
