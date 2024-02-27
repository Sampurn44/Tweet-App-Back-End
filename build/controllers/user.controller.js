"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = exports.updateUserController = exports.createUserController = exports.getUserController = void 0;
const user_repositories_1 = require("../repositories/user.repositories");
const getUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    console.log(userId);
    try {
        const user = yield (0, user_repositories_1.getUserRepo)(userId);
        if (user) {
            res.status(200).json({ data: user });
        }
        else {
            res.status(500).json({ error: "User Not Found" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.getUserController = getUserController;
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    try {
        const sucess = yield (0, user_repositories_1.createUserRepo)(user);
        if (sucess) {
            res.status(200).json({ data: user });
        }
        else {
            res.status(500).json({ error: "Unable to create new user" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.createUserController = createUserController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = req.body;
    try {
        const update = yield (0, user_repositories_1.updateUserRepo)(updatedUser.uid, updatedUser);
        if (update) {
            res.status(200).json({ data: 'User Update Successful' });
        }
        else {
            res.status(500).json({ error: "User Updated  Failed" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.query.userId;
    try {
        const sucess = yield (0, user_repositories_1.deleteUserRepo)(userId);
        if (sucess) {
            res.status(200).json({ data: 'User deleted' });
        }
        else {
            res.status(500).json({ error: "Not Unable to delete user" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ 'error': error });
    }
});
exports.deleteUserController = deleteUserController;
