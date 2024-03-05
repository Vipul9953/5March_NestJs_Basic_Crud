import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { User } from './user.entity'; // Adjust the path as necessary
import { UsersService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers:[UserController],
  exports: [UsersService], 
})
export class UsersModule {}
