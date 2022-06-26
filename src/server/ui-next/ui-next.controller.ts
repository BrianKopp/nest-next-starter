import { Render } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class UiNextController {
  @Get('*')
  @Render('index')
  home() {
    return {};
  }
}
