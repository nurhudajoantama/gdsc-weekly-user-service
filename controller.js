const model = require('./model');

const register = async (req, res) => {
    const { username, password, fullname } = req.body;

    if (!username || !password || !fullname) {
        return res.status(400).json({
            status: 'error',
            message: 'Username, password, and fullname are required',
            data: null,
        });
    }

    const user = await model.getUserByUsername(username);

    if (user) {
        return res.status(400).json({
            status: 'error',
            message: 'Username already exists',
            data: null,
        });
    }

    const id = await model.insertUser({ username, password, fullname });
    return res.status(200).json({
        status: 'success',
        message: 'User created successfully',
        data: { id, username, fullname },
    });
}

const getUserById = async (req, res) => {
    const { id } = req.params;

    const user = await model.getUserById(id);

    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'User not found',
            data: null,
        });
    }

    return res.status(200).json({
        status: 'success',
        message: 'User found',
        data: { id: user.id, username: user.username, fullname: user.fullname },
    });
}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    const user = await model.getUserById(id);

    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'User not found',
            data: null,
        });
    }

    await model.deleteUser(id);
    return res.status(200).json({
        status: 'success',
        message: 'User deleted successfully',
        data: null,
    });
}

module.exports = {
    register,
    getUserById,
    deleteUser,
};