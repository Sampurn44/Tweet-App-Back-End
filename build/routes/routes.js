"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import userRouter from "./user.routes";
// import tweetRouter from "./tweet.routes";
const hello_routes_1 = __importDefault(require("./hello.routes"));
const router = (0, express_1.Router)();
// router.use('/user',userRouter);
// router.use('/tweet',tweetRouter);
router.use('/hello', hello_routes_1.default);
exports.default = router;
