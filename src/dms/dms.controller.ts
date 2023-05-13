import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  getChat(@Query() query, @Param() param) {
    console.log(query.perPage);
    console.log(param.url);
  }

  @Post(':id/chats')
  postChat(@Body() body) {}
}
