import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user-dto';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 12,
            name: "Vinay",
            type: "Customer"
        },
        {
            id: 13,
            name: "Prabh",
            type: "Customer"
        }
    ]

    getAllUser() {
        return this.users;
    }


    getSpecificUser(id: number) {
        const user = this.users.find((user) => user.id === id)

        if (!user) {
            throw new Error("User Not Found")
        }

        return user
    }

    addUser(user: UserDto) {
        const id = Date.now();
        this.users.push({
            id,
            ...user
        })

        return this.getSpecificUser(id)
    }
}
