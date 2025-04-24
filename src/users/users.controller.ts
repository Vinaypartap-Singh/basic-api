import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { UserDto } from './dto/user-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly user: UsersService) { }

    @Get()
    getAllUsers() {
        return this.user.getAllUser()
    }

    @Get(":id")
    getUserFromId(@Param('id') id: number) {
        try {
            return this.user.getSpecificUser(+id)
        } catch (error) {
            throw new NotFoundException(error.message)
        }
    }

    @Post()
    addUser(@Body() user: UserDto) {
        return this.user.addUser(user)
    }


}
