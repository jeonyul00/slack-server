import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Workspaces } from 'src/entities/Workspaces';

export class CreateWorkspaceDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'test',
    description: 'workspace name',
  })
  public workspace: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'test',
    description: 'url address',
  })
  public url: string;
}
