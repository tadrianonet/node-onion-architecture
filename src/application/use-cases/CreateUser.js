const User = require('../../domain/entities/User');  

class CreateUser {
    constructor(userService) {
        this.userService = userService;
    }

    async execute(userData) {
        const user = new User(null, userData.name, userData.email);
        return await this.userService.createUser(user);
    }
}

module.exports = CreateUser;
