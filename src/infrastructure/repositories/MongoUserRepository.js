const User = require('../../domain/entities/User');
const UserRepository = require('./UserRepository');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const UserModel = mongoose.model('User', userSchema);

class MongoUserRepository extends UserRepository {
    async save(user) {
        const newUser = new UserModel({
            name: user.name,
            email: user.email,
        });
        await newUser.save();
        return new User(newUser._id, newUser.name, newUser.email);
    }

    async findById(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return null;
        }
        const user = await UserModel.findById(id);
        if (user) {
            return new User(user._id, user.name, user.email);
        }
        return null;
    }

    async findAll() {
        const users = await UserModel.find();
        return users.map(user => new User(user._id, user.name, user.email));
    }
}

module.exports = MongoUserRepository;
