class FindAllUsers {
    constructor(userService) {
        this.userService = userService;
    }

    async execute() {
        return await this.userService.getAllUsers();
    }
}

module.exports = FindAllUsers;
