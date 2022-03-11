import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ClickDTO } from './dto/click.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<ClickDTO[]> {
    console.log('getHello call !');

    return this.appService.getHello();
  }

  @Get('test')
  async testInsert(): Promise<string> {
    const testData: ClickDTO = {
      objectId: '66d6c30a653c450432109909', // 여기 아이디 바꿔줘야 함.
      tokens: ['가자', '어디가'],
      brandId: '미스테리코',
      uploadedAt: '2022-03-10 00:00:00',
      Sign: 1,
      Version: 1,
    };
    await this.appService.insertTest(testData);
    return 'insert success';
  }
}
