import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { EnvStore } from '../../model/env-store';

const logModule = LoggerModule.forRoot({
  pinoHttp: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        levelFirst: true,
        translateTime: 'SYS:yyyy-mm-dd HH:MM:ss Z',
        messageFormat: '[{context}] {msg}',
        ignore: 'context',
      },
    },
    redact: ['headers["x-api-key"]'],
    quietReqLogger: true,
  },
});

@Module({
  imports: [logModule],
  controllers: [],
  providers: [EnvStore],
  exports: [EnvStore],
})
export class CommonModule {} 