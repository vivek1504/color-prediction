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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const result_1 = require("./result");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const users = [];
app.post("/login", (req, res) => {
    const username = req.body.username;
    const balance = 1000;
    const existingUser = users.filter((user) => {
        user.username === username;
    });
    if (existingUser.length > 0) {
        return res.json({ message: "user already exists" });
    }
    users.push({ username, balance });
    res.status(200).json({ message: "user created successfully", username });
});
app.post("/placebet", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bet = req.body.bet;
    const on = req.body.on;
    const username = req.body.username;
    const user = users.find((user) => user.username === username);
    if (!user || user.balance < bet) {
        return res.json({ message: "insufficient funds" });
    }
    const remainingAmount = (user === null || user === void 0 ? void 0 : user.balance) - bet;
    for (let i = 0; i < users.length; i++) {
        //@ts-ignore
        if (users[i].username === user) {
            users[i].balance = remainingAmount;
        }
    }
    const answer = (0, result_1.result)();
    yield new Promise((resolve) => { setTimeout(resolve, 3000); });
    if (answer === on) {
        const totalBalance = remainingAmount + bet * 1.85;
        for (let i = 0; i < users.length; i++) {
            //@ts-ignore
            if (users[i].username === user) {
                users[i].balance = totalBalance;
            }
        }
        return res.json({ message: "you won", balance: totalBalance });
    }
    return res.json({ message: "you lost", balance: remainingAmount
    });
}));
app.listen(3000, () => { console.log("listening"); });
