import { ExecutionContext, createParamDecorator } from '@nestjs/common';

// custom decorator
export const Token = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const response = ctx.switchToHttp().getResponse();
    return response.locals.jwt;
  },
);
