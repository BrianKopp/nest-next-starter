import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UiRenderService } from '../services/ui-render.service';

@Controller('/')
export class UiControllerController {
  constructor(private renderService: UiRenderService) {}

  @Get('*')
  static(@Req() request: Request, @Res() response: Response) {
    const handler = this.renderService.getNextServer().getRequestHandler();
    handler(request, response);
  }
}
