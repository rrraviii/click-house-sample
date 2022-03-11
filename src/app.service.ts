import { ClickHouseClient } from '@depyronick/nestjs-clickhouse';
import { Inject, Injectable } from '@nestjs/common';
import { ClickDTO } from './dto/click.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('ANALYTICS_SERVER')
    private analyticsServer: ClickHouseClient,
  ) {}

  getHello(): Promise<ClickDTO[]> {
    return this.analyticsServer.queryPromise('SELECT * FROM test_insert');
  }

  insertTest(e: ClickDTO): Promise<void> {
    return this.analyticsServer.insertPromise('test_insert', [e]);
  }

  test(e: any) {
    console.log('test', e);
  }
}
