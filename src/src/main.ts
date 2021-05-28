import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { SharedSessionServerMainModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(SharedSessionServerMainModule);

  /* Required headers (either disable/enable) */
  app.disable('x-powered-by');
  app.disable('etag');
  app.enable('trust proxy');
  
  await app.listen(3000);
}
bootstrap();
