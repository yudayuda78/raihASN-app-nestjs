import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    app.enableCors({
    origin: 'http://localhost:5173', // asal frontend kamu
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // jika kamu pakai cookie / auth token
  });

  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
