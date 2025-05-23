import { Module } from '@nestjs/common';
import { ToolsModule } from './common/tools.module';

@Module({
  imports: [ToolsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
