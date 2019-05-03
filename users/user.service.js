const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../db/database');
const User = db.User;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ username, password }) {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}

async function getAll() {
    return await User.find().select('-hash');
}

async function getById(id) {
    return await User.findById(id).select('-hash');
}

async function create(userParam) {
    // validation
    if (await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    const user = new User(userParam);

    // hash mot de passe
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // enregistrement d'un user
    await user.save();
}

async function update(id, userParam) {
    const user = await User.findById(id);

    // validation
    if (!user) throw 'User not found';
    if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash mot de passe si il a été entré
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copier les propriétés userParam au user
    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}