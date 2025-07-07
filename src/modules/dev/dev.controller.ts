import { Controller, Get, Logger, Req } from '@nestjs/common';
import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Dev')
@Controller('/dev')
export class DevController {
  private readonly logger = new Logger(DevController.name);

  @Get('/echo')
  echo(@Req() req: Request): string {
    this.logger.log('Request body: %o', req.body);
    return 'Success';
  }
} 