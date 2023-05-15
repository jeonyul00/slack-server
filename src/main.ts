import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './httpException.filter';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { ValidationPipe } from '@nestjs/common';
import passport from 'passport';

declare const module: any;

// index
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const port = process.env.PORT || 3000;

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  app.use(cookieParser());

  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET,
      cookie: {
        httpOnly: true,
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  // hotload
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  // swagger
  const config = new DocumentBuilder()
    .setTitle('slack API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  console.log(`---------- start server port is ${port} ----------`);
}

bootstrap();
