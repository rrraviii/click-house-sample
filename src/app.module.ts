import {
  ClickHouseConnectionProtocol,
  ClickHouseModule,
} from '@depyronick/nestjs-clickhouse';
import { Module } from '@nestjs/common';
import { Agent as HttpAgent } from 'http';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './module/config.module';

@Module({
  imports: [
    ConfigurationModule,
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
