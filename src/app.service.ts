import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {
  constructor(private usersService: UsersService) {}
  getHello(): string {
    this.usersService.getUsers();
    this.getWow();
    return process.env.SECRET;
  }
  async getWow() {}
}
