import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./user.service";
import { User } from "./user.entity";

@Controller('/user')
export class UserController{

    constructor(private readonly userservice:UsersService){}


    @Post('/add')
    addUser(@Body() data:any):Promise<User>{
        console.log(data);
        return this.userservice.addUser(data);
    }

    @Get('/getall')
    getAllUser():Promise<User[]>{
        return this.userservice.findAll();
    }

    @Get('/get/:id')
    getUser(@Param('id') id :number):Promise<User>{
        console.log(id);
        return this.userservice.findOne(id);
    }
   

    @Delete('/delete/:id')
    deleteUser(@Param('id') id:number):Promise<string>{
        return this.userservice.remove(id);
    }



    @Put('/update/:id')
    updateUser(@Param('id') id:number, @Body() user:User):Promise<User>{
        console.log(id,"--", user)

        return this.userservice.updateUser(id, user)
    }

}