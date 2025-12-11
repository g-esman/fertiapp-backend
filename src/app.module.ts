import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EducationModule } from './education/education.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';

@Module({
  imports: [UsersModule, EducationModule, PrismaModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
