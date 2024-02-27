import { Request, Response } from "express";
import { getUserRepo, createUserRepo, deleteUserRepo, updateUserRepo } from "../repositories/user.repositories";
import { getTweetRepo, createTweetRepo, deleteTweetRepo, updateTweetRepo, } from "../repositories/tweet.repositories";
import { IUserInterface } from "../database/interface/user.interface";
import { ITweetInterface } from "../database/interface/tweet.interface";

export const getUserController = async (req: Request, res: Response) => {

    const userId = req.query.userId as string;

    try {

        const user = await getUserRepo(userId)
        if (user) {
            res.status(200).json({ 'data': user });

        }
        else {
            res.status(500).json({ 'error': "User Not Found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'error': error });
    }
}
export const createUserController = async (req: Request, res: Response) => {

    const user: IUserInterface = req.body;

    try {

        const sucess = await createUserRepo(user)
        if (user) {
            res.status(200).json({ 'data': sucess });

        }
        else {
            res.status(500).json({ 'error': "User Not Unable to create new user" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'error': error });
    }
}
export const updateUserController = async (req: Request, res: Response) => {

    const updatedUser: IUserInterface = req.body;

    try {

        const update = await updateUserRepo(updatedUser.uid,updatedUser)
        if (update) {
            res.status(200).json({ 'data': 'User Update Successful' });

        }
        else {
            res.status(500).json({ 'error': "User Updated  Failed" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'error': error });
    }
}
export const deleteUserController = async (req: Request, res: Response) => {

    const userId= req.query.userId as string;

    try {

        const sucess = await deleteUserRepo(userId);
        if (sucess) {
            res.status(200).json({ 'data': 'User deleted' });
        }
        else {
            res.status(500).json({ 'error': "Not Unable to delete user" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ 'error': error });
    }
}