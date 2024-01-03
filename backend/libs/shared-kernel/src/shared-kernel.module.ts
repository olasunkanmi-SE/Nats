import { Module } from '@nestjs/common';
import { SharedKernelService } from './shared-kernel.service';

@Module({
  providers: [SharedKernelService],
  exports: [SharedKernelService],
})
export class SharedKernelModule {}
