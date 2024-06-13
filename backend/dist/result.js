"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = void 0;
const result = () => {
    const answer = Math.floor(Math.random() * 2);
    if (answer == 0) {
        return "blue";
    }
    else {
        return "red";
    }
};
exports.result = result;
