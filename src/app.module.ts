import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EducationModule } from './education/education.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, EducationModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
