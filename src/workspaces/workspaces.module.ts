import { Module } from '@nestjs/common';
import { WorkspacesController } from 'src/worckspaces/workspaces.controller';
import { WorkspacesService } from 'src/worckspaces/workspaces.service';

@Module({
  providers: [WorkspacesService],
  controllers: [WorkspacesController],
})
export class WorkspacesModule {}
