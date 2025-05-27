import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { OracleEntity } from './oracle.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'oracle',
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECT_STRING,
      extra: {
        TNS_ADMIN: process.env.TNS_ADMIN,
      },
      synchronize: true,  // Solo para desarrollo
      logging: true,
      entities: [OracleEntity],
    }),
  ],
})
export class AppModule {}