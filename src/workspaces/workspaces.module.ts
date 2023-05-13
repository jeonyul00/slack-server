import { Module } from '@nestjs/common';
import { WorkspacesController } from 'src/workspaces/workspaces.controller';
import { WorkspacesService } from 'src/workspaces/workspaces.service';

@Module({
  providers: [WorkspacesService],
  controllers: [WorkspacesController],
})
export class WorkspacesModule {}
