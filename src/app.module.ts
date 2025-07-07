import { Module } from '@nestjs/common';
import { AppController } from './modules/app.controller';
import { AppService } from './providers/services/app.service';
import { CommonModule } from './modules/common/common.module';
import { DevModule } from './modules/dev/dev.module';

@Module({
  imports: [CommonModule, DevModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 