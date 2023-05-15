import { PickType } from '@nestjs/swagger';
import { Users } from 'src/entities/Users';

export class JoinRequestDto extends PickType(Users, [
  'email',
  'nickname',
  'password',
] as const) {}

// PickType : 기존 dto에서 필요한 요소만 가져옴
