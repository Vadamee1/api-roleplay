import { Module } from '@nestjs/common';
import { CryptoService } from './application/services/crypto.service';

@Module({
  providers: [CryptoService],
  exports: [CryptoService],
})
export class ToolsModule {}
