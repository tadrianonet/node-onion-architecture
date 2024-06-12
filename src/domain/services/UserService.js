class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async createUser(user) {
        return await this.userRepository.save(user);
    }

    async getUserById(userId) {
        return await this.userRepository.findById(userId);
    }

    async getAllUsers() {
        return await this.userRepository.findAll();
    }
}

module.exports = UserService;
