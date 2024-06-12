class GetUser {
    constructor(userService) {
        this.userService = userService;
    }

    async execute(userId) {
        return await this.userService.getUserById(userId);
    }
}

module.exports = GetUser;
