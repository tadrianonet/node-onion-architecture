const express = require('express');
const router = express.Router();
const UserService = require('../../domain/services/UserService');
const MongoUserRepository = require('../../infrastructure/repositories/MongoUserRepository');
const CreateUser = require('../../application/use-cases/CreateUser');
const GetUser = require('../../application/use-cases/GetUser');
const FindAllUsers = require('../../application/use-cases/FindAllUsers');

const userRepository = new MongoUserRepository();
const userService = new UserService(userRepository);
const createUser = new CreateUser(userService);
const getUser = new GetUser(userService);
const findAllUsers = new FindAllUsers(userService);

router.post('/users', async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await createUser.execute({ name, email });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await getUser.execute(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await findAllUsers.execute();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
