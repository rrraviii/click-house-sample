import {
  ClickHouseClient,
  ClickHouseConnectionProtocol,
  ClickHouseModule,
} from '@depyronick/nestjs-clickhouse';
import { Module } from '@nestjs/common';
import { Agent as HttpAgent } from 'http';

@Module({
  imports: [
    ClickHouseModule.register([
      {
        name: process.env.NAME,
        host: process.env.HOST,
        port: parseInt(process.env.PORT),
        username: process.env.USERNAME,
        database: process.env.DATABASE,
        protocol: ClickHouseConnectionProtocol.HTTP,
        httpAgent: new HttpAgent({
          keepAlive: true,
          maxSockets: 10,
        }),
      },
    ]),
  ],
})
export class ClickModule {}
