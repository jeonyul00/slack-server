import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Response, Request, NextFunction } from 'express';

/* 
    like express mogan
*/

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction): void {
    // ----- 라우터 실행 전 1 -----
    const { ip, method, originalUrl } = req;
    const userAgent = req.get('user-agent') || '';

    // ----- 라우터 실행 후 3 -----
    res.on('finish', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');
      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
      );
    });
    // ----- 라우터로 이동 2 -----
    next();
  }
}
