import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfig {
  private logger = new Logger(AppConfig.name);

  constructor(private configService: ConfigService) { }

  public rabbitmqUser: string = this.configService.get<string>('RABBITMQ_USER');
  public rabbitmqPassword: string =
    this.configService.get<string>('RABBITMQ_PASSWORD');
  public rabbitmqHost: string = this.configService.get<string>('RABBITMQ_HOST');
  public rabbitmqPort: string = this.configService.get<string>('RABBITMQ_PORT');
  public rabbitmqVH: string = this.configService.get<string>(
    'RABBITMQ_VIRTUAL_HOST',
  );
  public rabbitmqUrl = `amqp://${this.rabbitmqUser}:${this.rabbitmqPassword}@${this.rabbitmqHost}:${this.rabbitmqPort}/${this.rabbitmqVH}`;
}
