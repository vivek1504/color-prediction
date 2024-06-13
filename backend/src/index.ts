import express from "express";
import { result } from "./result";
import cors from "cors"
const app = express();

app.use(cors())
app.use(express.json())

interface usersData {
    username : string,
    balance : number
}
const users : usersData[] = [];

app.post("/login",(req,res)=>{
    const username = req.body.username;
    const balance = 1000;

    const existingUser = users.filter((user)=>{
        user.username === username
    })

    if(existingUser.length>0){
        return res.json({message : "user already exists"});
    }

    users.push({username,balance})
    res.status(200).json({message: "user created successfully",username});

})

app.post("/placebet",async(req,res)=>{
    const bet = req.body.bet;
    const on : "red" | "blue" = req.body.on;
    const username = req.body.username;

    const user = users.find((user)=> user.username === username);

    if(!user || user.balance<bet){
        return res.json({message : "insufficient funds"})
    }

    const remainingAmount = user?.balance - bet;
    for(let i=0;i<users.length;i++){
        //@ts-ignore
        if(users[i].username===user){
            users[i].balance = remainingAmount;
        }
    }

    const answer = result();
    await new Promise((resolve)=>{setTimeout(resolve,3000)});

    if(answer === on){
        const totalBalance = remainingAmount + bet * 1.85;
        for(let i=0;i<users.length;i++){
            //@ts-ignore
            if(users[i].username === user){
                users[i].balance = totalBalance;
            }
        }
        return res.json({message : "you won",balance : totalBalance});
    }

    return res.json({message : "you lost",balance : remainingAmount 
})


})

app.listen(3000,()=>{console.log("listening")})
