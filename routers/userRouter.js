import express from 'express';
import { changePassword, editProfile, join, login, logout, userDetail, users } from '../controllers/userController';
import routes from '../routes';

const userRouter = express.Router();

userRouter.get(routes.join, join);
userRouter.get(routes.login, login);
userRouter.get(routes.logout, logout);
userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;