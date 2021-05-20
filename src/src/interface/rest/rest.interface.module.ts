import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { V1Controller } from './v1.controller';

@Module({
  imports: [CqrsModule],
  controllers: [V1Controller]
})
export class RestInterfaceModule { }
