import { Injectable } from '@nestjs/common';
import { initDotEnv, readEnv, readEnvArray } from '../utils/common';

@Injectable()
export class EnvStore {
  // initialize dotenv
  private readonly init = initDotEnv();

  // service
  readonly env: string = readEnv('ENV');
  readonly port: string = readEnv('PORT');
  readonly corsOrigins: string[] = readEnvArray('CORS_ORIGINS');

  // database
  readonly dbHost: string = readEnv('DATABASE_HOST');
  readonly dbPort: string = readEnv('DATABASE_PORT');
  readonly dbName: string = readEnv('DATABASE_NAME');
  readonly dbUser: string = readEnv('DATABASE_USER');
  readonly dbPassword: string = readEnv('DATABASE_PASSWORD');

  isProd() {
    return this.env?.toLowerCase() === 'prod';
  }

  isDev() {
    return (
      this.env?.toLowerCase() === 'local' ||
      this.env?.toLowerCase() === 'dev' ||
      this.env?.toLowerCase() === 'development'
    );
  }
} 