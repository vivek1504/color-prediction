import { atom } from "recoil";

export const choiceAtom = atom({
    key:'selectedAtom',
    default:""
})

export const betAtom = atom({
    key : "bet",
    default:0
});

export const balanceAtom = atom({
    key : "balance",
    default : 1000
})

export const isExplodingAtom = atom({
    key : "isExploding",
    default : false
});