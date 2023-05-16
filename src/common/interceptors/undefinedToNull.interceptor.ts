/* 
    컨트롤러 실행 전 || 후
*/

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/*
    마지막 데이터를 가공
    데이터가 undefined라면 null로 변환
*/
@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // next.handle() 전 === 컨트롤러 가기 전
    // next.handle() 후 === 컨트롤러 가고난 후 : 데이터를 내보내기 바로 직전
    return next
      .handle()
      .pipe(map((data) => (data === undefined ? null : data))); // data : 컨트롤러에서 반환한 데이터
  }
}
