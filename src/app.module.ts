import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UsersModule } from './users/users.module';
import { DmsModule } from './dms/dms.module';
import { ChannelsController } from './channels/channels.controller';
import { ChannelsService } from './channels/channels.service';
import { WorkspacesService } from './worckspaces/workspaces.service';
import { WorkspacesController } from './worckspaces/workspaces.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UsersModule, DmsModule],
  controllers: [AppController, ChannelsController, WorkspacesController],
  providers: [AppService, ConfigService, ChannelsService, WorkspacesService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // 라우트 전체에 로거미들웨어 적용
  }
}
