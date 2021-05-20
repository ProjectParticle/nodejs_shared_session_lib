/**
 * Interface(s) module
 * including rest and grpc
 */

import { Module } from '@nestjs/common';

import { RestInterfaceModule } from './rest/rest.interface.module';

@Module({
  imports: [
    RestInterfaceModule
  ]
})
export class InterfaceModule { }
