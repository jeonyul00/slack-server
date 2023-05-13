import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/worckspaces/:url/channels')
export class ChannelsController {
  @Get()
  getAllChannels() {}

  @Get('name')
  getSpecificChannel() {}

  @Post()
  createChannel() {}

  @Get(':name/chats')
  getChats(@Query() query, @Param() param) {
    console.log(query.perPage);
    console.log(param.url);
  }

  @Post(':name/chats')
  postChat(@Body() body) {}

  @Get(':name/members')
  getAllMemebers() {}

  @Post(':name/members')
  inviteMembers() {}
}
