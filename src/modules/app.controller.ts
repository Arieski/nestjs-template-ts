import { Controller, Get, HttpCode, Logger } from '@nestjs/common';
import { AppService } from '../providers/services/app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    this.logger.log('Hello!');
    return this.appService.getHello();
  }

  @Get('/health')
  @HttpCode(200)
  healthcheck(): string {
    return 'Success';
  }
} 