import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; 
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
 
  addUser(postmanuser:any):Promise<User>{
    return this.userRepository.save(postmanuser);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }
  
  async remove(id: number):Promise<string> {
    await this.userRepository.delete(id);
    return "user delete"
  }
  
  async updateUser(id: any, updateUser: User): Promise<User> {
    console.log('user');
    let user = await this.userRepository.findOneById(id);
    console.log(user);
    if (user) { 
        user.firstName = updateUser.firstName;
        user.lastName =  updateUser.lastName;
        user.isActive =  updateUser.isActive;
        user.message =   updateUser.message; 
      return await this.userRepository.save(user);
    }
  
    return user;
  }
}