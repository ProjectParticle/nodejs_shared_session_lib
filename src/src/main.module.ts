import { Module } from '@nestjs/common';

import { InterfaceModule } from './interface/interface.module';
import { RedisBackendModule } from './backend_redis/backend_redis.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [InterfaceModule, RedisBackendModule, CoreModule],
  controllers: [],
  providers: [],
})
export class SharedSessionServerMainModule { }
