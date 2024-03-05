import { Module } from '@nestjs/common';
import { AppController } from './app.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './user.service';
import { UserController } from './user.controller';
import { UsersModule } from './user.module';
@Module({
  imports: [    TypeOrmModule.forRoot({
    type: 'sqlite',
    database: '/home/vishal/.local/share/DBeaverData/workspace6/.metadata/sample-database-sqlite-1/Chinook.db',
    entities: [User],
    synchronize: true,  
  }),UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
